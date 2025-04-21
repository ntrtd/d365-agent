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
import { PricingAttributeLinks } from './PricingAttributeLinks';

/**
 * Request builder class for operations supported on the {@link PricingAttributeLinks} entity.
 */
export class PricingAttributeLinksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PricingAttributeLinks<T>, T> {
  /**
   * Returns a request builder for querying all `PricingAttributeLinks` entities.
   * @returns A request builder for creating requests to retrieve all `PricingAttributeLinks` entities.
   */
  getAll(): GetAllRequestBuilder<PricingAttributeLinks<T>, T> {
    return new GetAllRequestBuilder<PricingAttributeLinks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PricingAttributeLinks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PricingAttributeLinks`.
   */
  create(
    entity: PricingAttributeLinks<T>
  ): CreateRequestBuilder<PricingAttributeLinks<T>, T> {
    return new CreateRequestBuilder<PricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PricingAttributeLinks` entity based on its keys.
   * @param pricingAttributeGroup Key property. See {@link PricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link PricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link PricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link PricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link PricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests to retrieve one `PricingAttributeLinks` entity based on its keys.
   */
  getByKey(
    pricingAttributeGroup: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>,
    sourceName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PricingAttributeLinks<T>, T> {
    return new GetByKeyRequestBuilder<PricingAttributeLinks<T>, T>(
      this.entityApi,
      {
        PricingAttributeGroup: pricingAttributeGroup,
        AttributeName: attributeName,
        TypeName: typeName,
        SourceName: sourceName,
        FieldName: fieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PricingAttributeLinks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PricingAttributeLinks`.
   */
  update(
    entity: PricingAttributeLinks<T>
  ): UpdateRequestBuilder<PricingAttributeLinks<T>, T> {
    return new UpdateRequestBuilder<PricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PricingAttributeLinks`.
   * @param pricingAttributeGroup Key property. See {@link PricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link PricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link PricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link PricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link PricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `PricingAttributeLinks`.
   */
  delete(
    pricingAttributeGroup: string,
    attributeName: string,
    typeName: string,
    sourceName: string,
    fieldName: string
  ): DeleteRequestBuilder<PricingAttributeLinks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PricingAttributeLinks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PricingAttributeLinks` by taking the entity as a parameter.
   */
  delete(
    entity: PricingAttributeLinks<T>
  ): DeleteRequestBuilder<PricingAttributeLinks<T>, T>;
  delete(
    pricingAttributeGroupOrEntity: any,
    attributeName?: string,
    typeName?: string,
    sourceName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<PricingAttributeLinks<T>, T> {
    return new DeleteRequestBuilder<PricingAttributeLinks<T>, T>(
      this.entityApi,
      pricingAttributeGroupOrEntity instanceof PricingAttributeLinks
        ? pricingAttributeGroupOrEntity
        : {
            PricingAttributeGroup: pricingAttributeGroupOrEntity!,
            AttributeName: attributeName!,
            TypeName: typeName!,
            SourceName: sourceName!,
            FieldName: fieldName!
          }
    );
  }
}
