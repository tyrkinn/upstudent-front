import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

export type FragmentType<TDocumentType extends DocumentNode<any, any>> = TDocumentType extends DocumentNode<
infer TType,
any
>
	? TType extends {' $fragmentName'?: infer TKey}
		? TKey extends string
			? {' $fragmentRefs'?: {[key in TKey]: TType}}
			: never
		: never
	: never;

// Return non-nullable if `fragmentType` is non-nullable
export function useFragment<TType>(
	_documentNode: DocumentNode<TType, any>,
	fragmentType: FragmentType<DocumentNode<TType, any>>
): TType;
// Return nullable if `fragmentType` is nullable
export function useFragment<TType>(
	_documentNode: DocumentNode<TType, any>,
	fragmentType: FragmentType<DocumentNode<TType, any>> | undefined | undefined
): TType | undefined | undefined;
// Return array of non-nullable if `fragmentType` is array of non-nullable
export function useFragment<TType>(
	_documentNode: DocumentNode<TType, any>,
	fragmentType: ReadonlyArray<FragmentType<DocumentNode<TType, any>>>
): readonly TType[];
// Return array of nullable if `fragmentType` is array of nullable
export function useFragment<TType>(
	_documentNode: DocumentNode<TType, any>,
	fragmentType: ReadonlyArray<FragmentType<DocumentNode<TType, any>>> | undefined | undefined
): readonly TType[] | undefined | undefined;
export function useFragment<TType>(
	_documentNode: DocumentNode<TType, any>,
	fragmentType: FragmentType<DocumentNode<TType, any>> | ReadonlyArray<FragmentType<DocumentNode<TType, any>>> | undefined | undefined,
): TType | readonly TType[] | undefined | undefined {
	return fragmentType as any;
}
