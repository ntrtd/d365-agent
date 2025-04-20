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
import { FiscalEstablishments } from './FiscalEstablishments';

/**
 * Request builder class for operations supported on the {@link FiscalEstablishments} entity.
 */
export class FiscalEstablishmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalEstablishments<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalEstablishments` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalEstablishments` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalEstablishments<T>, T> {
    return new GetAllRequestBuilder<FiscalEstablishments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalEstablishments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalEstablishments`.
   */
  create(
    entity: FiscalEstablishments<T>
  ): CreateRequestBuilder<FiscalEstablishments<T>, T> {
    return new CreateRequestBuilder<FiscalEstablishments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalEstablishments` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalEstablishments.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalEstablishments.fiscalEstablishmentId}.
   * @returns A request builder for creating requests to retrieve one `FiscalEstablishments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalEstablishments<T>, T> {
    return new GetByKeyRequestBuilder<FiscalEstablishments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalEstablishmentId: fiscalEstablishmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalEstablishments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalEstablishments`.
   */
  update(
    entity: FiscalEstablishments<T>
  ): UpdateRequestBuilder<FiscalEstablishments<T>, T> {
    return new UpdateRequestBuilder<FiscalEstablishments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishments`.
   * @param dataAreaId Key property. See {@link FiscalEstablishments.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalEstablishments.fiscalEstablishmentId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishments`.
   */
  delete(
    dataAreaId: string,
    fiscalEstablishmentId: string
  ): DeleteRequestBuilder<FiscalEstablishments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishments` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalEstablishments<T>
  ): DeleteRequestBuilder<FiscalEstablishments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalEstablishmentId?: string
  ): DeleteRequestBuilder<FiscalEstablishments<T>, T> {
    return new DeleteRequestBuilder<FiscalEstablishments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalEstablishments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalEstablishmentId: fiscalEstablishmentId!
          }
    );
  }
}
