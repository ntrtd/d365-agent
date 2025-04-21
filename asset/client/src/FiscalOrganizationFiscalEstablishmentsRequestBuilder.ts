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
import { FiscalOrganizationFiscalEstablishments } from './FiscalOrganizationFiscalEstablishments';

/**
 * Request builder class for operations supported on the {@link FiscalOrganizationFiscalEstablishments} entity.
 */
export class FiscalOrganizationFiscalEstablishmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalOrganizationFiscalEstablishments` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalOrganizationFiscalEstablishments` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
    return new GetAllRequestBuilder<
      FiscalOrganizationFiscalEstablishments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalOrganizationFiscalEstablishments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalOrganizationFiscalEstablishments`.
   */
  create(
    entity: FiscalOrganizationFiscalEstablishments<T>
  ): CreateRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
    return new CreateRequestBuilder<
      FiscalOrganizationFiscalEstablishments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalOrganizationFiscalEstablishments` entity based on its keys.
   * @param fiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationFiscalEstablishments.fiscalEstablishmentDataArea}.
   * @param fiscalEstablishment Key property. See {@link FiscalOrganizationFiscalEstablishments.fiscalEstablishment}.
   * @returns A request builder for creating requests to retrieve one `FiscalOrganizationFiscalEstablishments` entity based on its keys.
   */
  getByKey(
    fiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishment: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalOrganizationFiscalEstablishments<T>,
      T
    >(this.entityApi, {
      FiscalEstablishmentDataArea: fiscalEstablishmentDataArea,
      FiscalEstablishment: fiscalEstablishment
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalOrganizationFiscalEstablishments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalOrganizationFiscalEstablishments`.
   */
  update(
    entity: FiscalOrganizationFiscalEstablishments<T>
  ): UpdateRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
    return new UpdateRequestBuilder<
      FiscalOrganizationFiscalEstablishments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationFiscalEstablishments`.
   * @param fiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationFiscalEstablishments.fiscalEstablishmentDataArea}.
   * @param fiscalEstablishment Key property. See {@link FiscalOrganizationFiscalEstablishments.fiscalEstablishment}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationFiscalEstablishments`.
   */
  delete(
    fiscalEstablishmentDataArea: string,
    fiscalEstablishment: string
  ): DeleteRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationFiscalEstablishments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationFiscalEstablishments` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalOrganizationFiscalEstablishments<T>
  ): DeleteRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T>;
  delete(
    fiscalEstablishmentDataAreaOrEntity: any,
    fiscalEstablishment?: string
  ): DeleteRequestBuilder<FiscalOrganizationFiscalEstablishments<T>, T> {
    return new DeleteRequestBuilder<
      FiscalOrganizationFiscalEstablishments<T>,
      T
    >(
      this.entityApi,
      fiscalEstablishmentDataAreaOrEntity instanceof
      FiscalOrganizationFiscalEstablishments
        ? fiscalEstablishmentDataAreaOrEntity
        : {
            FiscalEstablishmentDataArea: fiscalEstablishmentDataAreaOrEntity!,
            FiscalEstablishment: fiscalEstablishment!
          }
    );
  }
}
