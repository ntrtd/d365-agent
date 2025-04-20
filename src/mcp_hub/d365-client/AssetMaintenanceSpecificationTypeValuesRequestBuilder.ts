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
import { AssetMaintenanceSpecificationTypeValues } from './AssetMaintenanceSpecificationTypeValues';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceSpecificationTypeValues} entity.
 */
export class AssetMaintenanceSpecificationTypeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceSpecificationTypeValues` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceSpecificationTypeValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceSpecificationTypeValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceSpecificationTypeValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceSpecificationTypeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceSpecificationTypeValues`.
   */
  create(
    entity: AssetMaintenanceSpecificationTypeValues<T>
  ): CreateRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceSpecificationTypeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceSpecificationTypeValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceSpecificationTypeValues.dataAreaId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceSpecificationTypeValues.attributeTypeId}.
   * @param stringValue Key property. See {@link AssetMaintenanceSpecificationTypeValues.stringValue}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceSpecificationTypeValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>,
    stringValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceSpecificationTypeValues<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AttributeTypeId: attributeTypeId,
      StringValue: stringValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceSpecificationTypeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceSpecificationTypeValues`.
   */
  update(
    entity: AssetMaintenanceSpecificationTypeValues<T>
  ): UpdateRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceSpecificationTypeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceSpecificationTypeValues`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceSpecificationTypeValues.dataAreaId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceSpecificationTypeValues.attributeTypeId}.
   * @param stringValue Key property. See {@link AssetMaintenanceSpecificationTypeValues.stringValue}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceSpecificationTypeValues`.
   */
  delete(
    dataAreaId: string,
    attributeTypeId: string,
    stringValue: string
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceSpecificationTypeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceSpecificationTypeValues` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceSpecificationTypeValues<T>
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeTypeId?: string,
    stringValue?: string
  ): DeleteRequestBuilder<AssetMaintenanceSpecificationTypeValues<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceSpecificationTypeValues<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceSpecificationTypeValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeTypeId: attributeTypeId!,
            StringValue: stringValue!
          }
    );
  }
}
