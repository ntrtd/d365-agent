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
import { FiscalEstablishmentIePerStates } from './FiscalEstablishmentIePerStates';

/**
 * Request builder class for operations supported on the {@link FiscalEstablishmentIePerStates} entity.
 */
export class FiscalEstablishmentIePerStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalEstablishmentIePerStates` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalEstablishmentIePerStates` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
    return new GetAllRequestBuilder<FiscalEstablishmentIePerStates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalEstablishmentIePerStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalEstablishmentIePerStates`.
   */
  create(
    entity: FiscalEstablishmentIePerStates<T>
  ): CreateRequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
    return new CreateRequestBuilder<FiscalEstablishmentIePerStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalEstablishmentIePerStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalEstablishmentIePerStates.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalEstablishmentIePerStates.fiscalEstablishmentId}.
   * @param state Key property. See {@link FiscalEstablishmentIePerStates.state}.
   * @returns A request builder for creating requests to retrieve one `FiscalEstablishmentIePerStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
    return new GetByKeyRequestBuilder<FiscalEstablishmentIePerStates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalEstablishmentId: fiscalEstablishmentId,
        State: state
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalEstablishmentIePerStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalEstablishmentIePerStates`.
   */
  update(
    entity: FiscalEstablishmentIePerStates<T>
  ): UpdateRequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
    return new UpdateRequestBuilder<FiscalEstablishmentIePerStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishmentIePerStates`.
   * @param dataAreaId Key property. See {@link FiscalEstablishmentIePerStates.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalEstablishmentIePerStates.fiscalEstablishmentId}.
   * @param state Key property. See {@link FiscalEstablishmentIePerStates.state}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishmentIePerStates`.
   */
  delete(
    dataAreaId: string,
    fiscalEstablishmentId: string,
    state: string
  ): DeleteRequestBuilder<FiscalEstablishmentIePerStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishmentIePerStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishmentIePerStates` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalEstablishmentIePerStates<T>
  ): DeleteRequestBuilder<FiscalEstablishmentIePerStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalEstablishmentId?: string,
    state?: string
  ): DeleteRequestBuilder<FiscalEstablishmentIePerStates<T>, T> {
    return new DeleteRequestBuilder<FiscalEstablishmentIePerStates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalEstablishmentIePerStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalEstablishmentId: fiscalEstablishmentId!,
            State: state!
          }
    );
  }
}
