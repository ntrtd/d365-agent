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
import { LtmAddressStateDocTypes } from './LtmAddressStateDocTypes';

/**
 * Request builder class for operations supported on the {@link LtmAddressStateDocTypes} entity.
 */
export class LtmAddressStateDocTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAddressStateDocTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAddressStateDocTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAddressStateDocTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAddressStateDocTypes<T>, T> {
    return new GetAllRequestBuilder<LtmAddressStateDocTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmAddressStateDocTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAddressStateDocTypes`.
   */
  create(
    entity: LtmAddressStateDocTypes<T>
  ): CreateRequestBuilder<LtmAddressStateDocTypes<T>, T> {
    return new CreateRequestBuilder<LtmAddressStateDocTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAddressStateDocTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAddressStateDocTypes.dataAreaId}.
   * @param stateDocTypeId Key property. See {@link LtmAddressStateDocTypes.stateDocTypeId}.
   * @param stateId Key property. See {@link LtmAddressStateDocTypes.stateId}.
   * @param countryRegionId Key property. See {@link LtmAddressStateDocTypes.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `LtmAddressStateDocTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    stateDocTypeId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmAddressStateDocTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmAddressStateDocTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StateDocTypeId: stateDocTypeId,
        StateId: stateId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAddressStateDocTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAddressStateDocTypes`.
   */
  update(
    entity: LtmAddressStateDocTypes<T>
  ): UpdateRequestBuilder<LtmAddressStateDocTypes<T>, T> {
    return new UpdateRequestBuilder<LtmAddressStateDocTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAddressStateDocTypes`.
   * @param dataAreaId Key property. See {@link LtmAddressStateDocTypes.dataAreaId}.
   * @param stateDocTypeId Key property. See {@link LtmAddressStateDocTypes.stateDocTypeId}.
   * @param stateId Key property. See {@link LtmAddressStateDocTypes.stateId}.
   * @param countryRegionId Key property. See {@link LtmAddressStateDocTypes.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressStateDocTypes`.
   */
  delete(
    dataAreaId: string,
    stateDocTypeId: string,
    stateId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<LtmAddressStateDocTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAddressStateDocTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressStateDocTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAddressStateDocTypes<T>
  ): DeleteRequestBuilder<LtmAddressStateDocTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    stateDocTypeId?: string,
    stateId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<LtmAddressStateDocTypes<T>, T> {
    return new DeleteRequestBuilder<LtmAddressStateDocTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAddressStateDocTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StateDocTypeId: stateDocTypeId!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
