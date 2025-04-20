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
import { ReleasedEngineeringProductVersionAttributeValues } from './ReleasedEngineeringProductVersionAttributeValues';

/**
 * Request builder class for operations supported on the {@link ReleasedEngineeringProductVersionAttributeValues} entity.
 */
export class ReleasedEngineeringProductVersionAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ReleasedEngineeringProductVersionAttributeValues<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ReleasedEngineeringProductVersionAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedEngineeringProductVersionAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReleasedEngineeringProductVersionAttributeValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedEngineeringProductVersionAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   */
  create(
    entity: ReleasedEngineeringProductVersionAttributeValues<T>
  ): CreateRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  > {
    return new CreateRequestBuilder<
      ReleasedEngineeringProductVersionAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedEngineeringProductVersionAttributeValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductVersionId}.
   * @param engineeringProductAttributeName Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `ReleasedEngineeringProductVersionAttributeValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringProductNumber: DeserializedType<T, 'Edm.String'>,
    engineeringProductVersionId: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ReleasedEngineeringProductVersionAttributeValues<T>,
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
   * Returns a request builder for updating an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   */
  update(
    entity: ReleasedEngineeringProductVersionAttributeValues<T>
  ): UpdateRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ReleasedEngineeringProductVersionAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductVersionId}.
   * @param engineeringProductAttributeName Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link ReleasedEngineeringProductVersionAttributeValues.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   */
  delete(
    dataAreaId: string,
    engineeringProductNumber: string,
    engineeringProductVersionId: string,
    engineeringProductAttributeName: string,
    engineeringProductAttributeTypeName: string
  ): DeleteRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersionAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersionAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedEngineeringProductVersionAttributeValues<T>
  ): DeleteRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringProductNumber?: string,
    engineeringProductVersionId?: string,
    engineeringProductAttributeName?: string,
    engineeringProductAttributeTypeName?: string
  ): DeleteRequestBuilder<
    ReleasedEngineeringProductVersionAttributeValues<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ReleasedEngineeringProductVersionAttributeValues<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ReleasedEngineeringProductVersionAttributeValues
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
