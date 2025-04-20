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
import { AttributeMetadatas } from './AttributeMetadatas';

/**
 * Request builder class for operations supported on the {@link AttributeMetadatas} entity.
 */
export class AttributeMetadatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AttributeMetadatas<T>, T> {
  /**
   * Returns a request builder for querying all `AttributeMetadatas` entities.
   * @returns A request builder for creating requests to retrieve all `AttributeMetadatas` entities.
   */
  getAll(): GetAllRequestBuilder<AttributeMetadatas<T>, T> {
    return new GetAllRequestBuilder<AttributeMetadatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AttributeMetadatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AttributeMetadatas`.
   */
  create(
    entity: AttributeMetadatas<T>
  ): CreateRequestBuilder<AttributeMetadatas<T>, T> {
    return new CreateRequestBuilder<AttributeMetadatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AttributeMetadatas` entity based on its keys.
   * @param attributeName Key property. See {@link AttributeMetadatas.attributeName}.
   * @param typeName Key property. See {@link AttributeMetadatas.typeName}.
   * @returns A request builder for creating requests to retrieve one `AttributeMetadatas` entity based on its keys.
   */
  getByKey(
    attributeName: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AttributeMetadatas<T>, T> {
    return new GetByKeyRequestBuilder<AttributeMetadatas<T>, T>(
      this.entityApi,
      {
        AttributeName: attributeName,
        TypeName: typeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AttributeMetadatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AttributeMetadatas`.
   */
  update(
    entity: AttributeMetadatas<T>
  ): UpdateRequestBuilder<AttributeMetadatas<T>, T> {
    return new UpdateRequestBuilder<AttributeMetadatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AttributeMetadatas`.
   * @param attributeName Key property. See {@link AttributeMetadatas.attributeName}.
   * @param typeName Key property. See {@link AttributeMetadatas.typeName}.
   * @returns A request builder for creating requests that delete an entity of type `AttributeMetadatas`.
   */
  delete(
    attributeName: string,
    typeName: string
  ): DeleteRequestBuilder<AttributeMetadatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AttributeMetadatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AttributeMetadatas` by taking the entity as a parameter.
   */
  delete(
    entity: AttributeMetadatas<T>
  ): DeleteRequestBuilder<AttributeMetadatas<T>, T>;
  delete(
    attributeNameOrEntity: any,
    typeName?: string
  ): DeleteRequestBuilder<AttributeMetadatas<T>, T> {
    return new DeleteRequestBuilder<AttributeMetadatas<T>, T>(
      this.entityApi,
      attributeNameOrEntity instanceof AttributeMetadatas
        ? attributeNameOrEntity
        : {
            AttributeName: attributeNameOrEntity!,
            TypeName: typeName!
          }
    );
  }
}
