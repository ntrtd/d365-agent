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
import { AssetMaintenanceFunctionalLocationAttributeSpecifications } from './AssetMaintenanceFunctionalLocationAttributeSpecifications';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationAttributeSpecifications} entity.
 */
export class AssetMaintenanceFunctionalLocationAttributeSpecificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationAttributeSpecifications` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationAttributeSpecifications` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationAttributeSpecifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationAttributeSpecifications<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationAttributeSpecifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationAttributeSpecifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      AttributeTypeId: attributeTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationAttributeSpecifications<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributeSpecifications.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributeSpecifications` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationAttributeSpecifications<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributeSpecifications<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationAttributeSpecifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
