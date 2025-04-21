/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { InternalOrganizationProductAttributeMetadatas } from './InternalOrganizationProductAttributeMetadatas';

/**
 * Request builder class for operations supported on the {@link InternalOrganizationProductAttributeMetadatas} entity.
 */
export class InternalOrganizationProductAttributeMetadatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T> {
  /**
   * Returns a request builder for querying all `InternalOrganizationProductAttributeMetadatas` entities.
   * @returns A request builder for creating requests to retrieve all `InternalOrganizationProductAttributeMetadatas` entities.
   */
  getAll(): GetAllRequestBuilder<
    InternalOrganizationProductAttributeMetadatas<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InternalOrganizationProductAttributeMetadatas<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InternalOrganizationProductAttributeMetadatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InternalOrganizationProductAttributeMetadatas`.
   */
  create(
    entity: InternalOrganizationProductAttributeMetadatas<T>
  ): CreateRequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T> {
    return new CreateRequestBuilder<
      InternalOrganizationProductAttributeMetadatas<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InternalOrganizationProductAttributeMetadatas` entity based on its keys.
   * @param partyNumber Key property. See {@link InternalOrganizationProductAttributeMetadatas.partyNumber}.
   * @param attributeName Key property. See {@link InternalOrganizationProductAttributeMetadatas.attributeName}.
   * @param attributeTypeName Key property. See {@link InternalOrganizationProductAttributeMetadatas.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `InternalOrganizationProductAttributeMetadatas` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    InternalOrganizationProductAttributeMetadatas<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      InternalOrganizationProductAttributeMetadatas<T>,
      T
    >(this.entityApi, {
      PartyNumber: partyNumber,
      AttributeName: attributeName,
      AttributeTypeName: attributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InternalOrganizationProductAttributeMetadatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InternalOrganizationProductAttributeMetadatas`.
   */
  update(
    entity: InternalOrganizationProductAttributeMetadatas<T>
  ): UpdateRequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T> {
    return new UpdateRequestBuilder<
      InternalOrganizationProductAttributeMetadatas<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InternalOrganizationProductAttributeMetadatas`.
   * @param partyNumber Key property. See {@link InternalOrganizationProductAttributeMetadatas.partyNumber}.
   * @param attributeName Key property. See {@link InternalOrganizationProductAttributeMetadatas.attributeName}.
   * @param attributeTypeName Key property. See {@link InternalOrganizationProductAttributeMetadatas.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `InternalOrganizationProductAttributeMetadatas`.
   */
  delete(
    partyNumber: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InternalOrganizationProductAttributeMetadatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InternalOrganizationProductAttributeMetadatas` by taking the entity as a parameter.
   */
  delete(
    entity: InternalOrganizationProductAttributeMetadatas<T>
  ): DeleteRequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T>;
  delete(
    partyNumberOrEntity: any,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<InternalOrganizationProductAttributeMetadatas<T>, T> {
    return new DeleteRequestBuilder<
      InternalOrganizationProductAttributeMetadatas<T>,
      T
    >(
      this.entityApi,
      partyNumberOrEntity instanceof
      InternalOrganizationProductAttributeMetadatas
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
