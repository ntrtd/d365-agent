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
import { EngineeringProductCategoryAttributeDetails } from './EngineeringProductCategoryAttributeDetails';

/**
 * Request builder class for operations supported on the {@link EngineeringProductCategoryAttributeDetails} entity.
 */
export class EngineeringProductCategoryAttributeDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductCategoryAttributeDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductCategoryAttributeDetails` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductCategoryAttributeDetails<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductCategoryAttributeDetails<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductCategoryAttributeDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductCategoryAttributeDetails`.
   */
  create(
    entity: EngineeringProductCategoryAttributeDetails<T>
  ): CreateRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T> {
    return new CreateRequestBuilder<
      EngineeringProductCategoryAttributeDetails<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductCategoryAttributeDetails` entity based on its keys.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductCategoryName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductAttributeTypeName}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductAttributeName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductCategoryAttributeDetails` entity based on its keys.
   */
  getByKey(
    engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringProductCategoryAttributeDetails<T>,
      T
    >(this.entityApi, {
      EngineeringProductCategoryName: engineeringProductCategoryName,
      EngineeringProductAttributeTypeName: engineeringProductAttributeTypeName,
      EngineeringProductAttributeName: engineeringProductAttributeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductCategoryAttributeDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductCategoryAttributeDetails`.
   */
  update(
    entity: EngineeringProductCategoryAttributeDetails<T>
  ): UpdateRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringProductCategoryAttributeDetails<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryAttributeDetails`.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductCategoryName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductAttributeTypeName}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductCategoryAttributeDetails.engineeringProductAttributeName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryAttributeDetails`.
   */
  delete(
    engineeringProductCategoryName: string,
    engineeringProductAttributeTypeName: string,
    engineeringProductAttributeName: string
  ): DeleteRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryAttributeDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryAttributeDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductCategoryAttributeDetails<T>
  ): DeleteRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T>;
  delete(
    engineeringProductCategoryNameOrEntity: any,
    engineeringProductAttributeTypeName?: string,
    engineeringProductAttributeName?: string
  ): DeleteRequestBuilder<EngineeringProductCategoryAttributeDetails<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringProductCategoryAttributeDetails<T>,
      T
    >(
      this.entityApi,
      engineeringProductCategoryNameOrEntity instanceof
      EngineeringProductCategoryAttributeDetails
        ? engineeringProductCategoryNameOrEntity
        : {
            EngineeringProductCategoryName:
              engineeringProductCategoryNameOrEntity!,
            EngineeringProductAttributeTypeName:
              engineeringProductAttributeTypeName!,
            EngineeringProductAttributeName: engineeringProductAttributeName!
          }
    );
  }
}
