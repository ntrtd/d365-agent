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
import { IntrastatCodes } from './IntrastatCodes';

/**
 * Request builder class for operations supported on the {@link IntrastatCodes} entity.
 */
export class IntrastatCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatCodes<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatCodes` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatCodes` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatCodes<T>, T> {
    return new GetAllRequestBuilder<IntrastatCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntrastatCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatCodes`.
   */
  create(
    entity: IntrastatCodes<T>
  ): CreateRequestBuilder<IntrastatCodes<T>, T> {
    return new CreateRequestBuilder<IntrastatCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatCodes.dataAreaId}.
   * @param countryRegionId Key property. See {@link IntrastatCodes.countryRegionId}.
   * @param stateId Key property. See {@link IntrastatCodes.stateId}.
   * @returns A request builder for creating requests to retrieve one `IntrastatCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatCodes<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CountryRegionId: countryRegionId,
      StateId: stateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatCodes`.
   */
  update(
    entity: IntrastatCodes<T>
  ): UpdateRequestBuilder<IntrastatCodes<T>, T> {
    return new UpdateRequestBuilder<IntrastatCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatCodes`.
   * @param dataAreaId Key property. See {@link IntrastatCodes.dataAreaId}.
   * @param countryRegionId Key property. See {@link IntrastatCodes.countryRegionId}.
   * @param stateId Key property. See {@link IntrastatCodes.stateId}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCodes`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string,
    stateId: string
  ): DeleteRequestBuilder<IntrastatCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCodes` by taking the entity as a parameter.
   */
  delete(entity: IntrastatCodes<T>): DeleteRequestBuilder<IntrastatCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string,
    stateId?: string
  ): DeleteRequestBuilder<IntrastatCodes<T>, T> {
    return new DeleteRequestBuilder<IntrastatCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!
          }
    );
  }
}
