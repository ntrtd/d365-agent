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
import { AssetMaintenanceFunctionalLocationTypePermittedSubTypes } from './AssetMaintenanceFunctionalLocationTypePermittedSubTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes} entity.
 */
export class AssetMaintenanceFunctionalLocationTypePermittedSubTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.functionalLocationTypeId}.
   * @param permittedFunctionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.permittedFunctionalLocationTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationTypeId: DeserializedType<T, 'Edm.String'>,
    permittedFunctionalLocationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationTypeId: functionalLocationTypeId,
      PermittedFunctionalLocationTypeId: permittedFunctionalLocationTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.functionalLocationTypeId}.
   * @param permittedFunctionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes.permittedFunctionalLocationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   */
  delete(
    dataAreaId: string,
    functionalLocationTypeId: string,
    permittedFunctionalLocationTypeId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypePermittedSubTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationTypeId?: string,
    permittedFunctionalLocationTypeId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationTypePermittedSubTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationTypeId: functionalLocationTypeId!,
            PermittedFunctionalLocationTypeId:
              permittedFunctionalLocationTypeId!
          }
    );
  }
}
