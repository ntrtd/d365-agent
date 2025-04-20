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
import { ReleasedEngineeringProductVersionAttributes } from './ReleasedEngineeringProductVersionAttributes';

/**
 * Request builder class for operations supported on the {@link ReleasedEngineeringProductVersionAttributes} entity.
 */
export class ReleasedEngineeringProductVersionAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedEngineeringProductVersionAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedEngineeringProductVersionAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReleasedEngineeringProductVersionAttributes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReleasedEngineeringProductVersionAttributes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedEngineeringProductVersionAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedEngineeringProductVersionAttributes`.
   */
  create(
    entity: ReleasedEngineeringProductVersionAttributes<T>
  ): CreateRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T> {
    return new CreateRequestBuilder<
      ReleasedEngineeringProductVersionAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedEngineeringProductVersionAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersionAttributes.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductVersionId}.
   * @param engineeringProductAttributeName Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `ReleasedEngineeringProductVersionAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringProductNumber: DeserializedType<T, 'Edm.String'>,
    engineeringProductVersionId: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T> {
    return new GetByKeyRequestBuilder<
      ReleasedEngineeringProductVersionAttributes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringProductNumber: engineeringProductNumber,
      EngineeringProductVersionId: engineeringProductVersionId,
      EngineeringProductAttributeName: engineeringProductAttributeName,
      EngineeringProductAttributeTypeName: engineeringProductAttributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedEngineeringProductVersionAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedEngineeringProductVersionAttributes`.
   */
  update(
    entity: ReleasedEngineeringProductVersionAttributes<T>
  ): UpdateRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T> {
    return new UpdateRequestBuilder<
      ReleasedEngineeringProductVersionAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersionAttributes`.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersionAttributes.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductVersionId}.
   * @param engineeringProductAttributeName Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link ReleasedEngineeringProductVersionAttributes.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersionAttributes`.
   */
  delete(
    dataAreaId: string,
    engineeringProductNumber: string,
    engineeringProductVersionId: string,
    engineeringProductAttributeName: string,
    engineeringProductAttributeTypeName: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersionAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersionAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedEngineeringProductVersionAttributes<T>
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringProductNumber?: string,
    engineeringProductVersionId?: string,
    engineeringProductAttributeName?: string,
    engineeringProductAttributeTypeName?: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersionAttributes<T>, T> {
    return new DeleteRequestBuilder<
      ReleasedEngineeringProductVersionAttributes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedEngineeringProductVersionAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringProductNumber: engineeringProductNumber!,
            EngineeringProductVersionId: engineeringProductVersionId!,
            EngineeringProductAttributeName: engineeringProductAttributeName!,
            EngineeringProductAttributeTypeName:
              engineeringProductAttributeTypeName!
          }
    );
  }
}
