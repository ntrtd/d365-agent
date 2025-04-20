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
import { AssetMaintenanceFunctionalLocationAttributesV2 } from './AssetMaintenanceFunctionalLocationAttributesV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationAttributesV2} entity.
 */
export class AssetMaintenanceFunctionalLocationAttributesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationAttributesV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationAttributesV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationAttributesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationAttributesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationAttributesV2<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributesV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationAttributesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationAttributesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      AttributeTypeId: attributeTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationAttributesV2<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributesV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributesV2.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationAttributesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributesV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationAttributesV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationAttributesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributesV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationAttributesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
