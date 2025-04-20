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
import { FiscalOrganizationAuditors } from './FiscalOrganizationAuditors';

/**
 * Request builder class for operations supported on the {@link FiscalOrganizationAuditors} entity.
 */
export class FiscalOrganizationAuditorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalOrganizationAuditors<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalOrganizationAuditors` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalOrganizationAuditors` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalOrganizationAuditors<T>, T> {
    return new GetAllRequestBuilder<FiscalOrganizationAuditors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalOrganizationAuditors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalOrganizationAuditors`.
   */
  create(
    entity: FiscalOrganizationAuditors<T>
  ): CreateRequestBuilder<FiscalOrganizationAuditors<T>, T> {
    return new CreateRequestBuilder<FiscalOrganizationAuditors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalOrganizationAuditors` entity based on its keys.
   * @param cvmNumber Key property. See {@link FiscalOrganizationAuditors.cvmNumber}.
   * @param name Key property. See {@link FiscalOrganizationAuditors.name}.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationAuditors.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizationAuditors.rootFiscalEstablishment}.
   * @returns A request builder for creating requests to retrieve one `FiscalOrganizationAuditors` entity based on its keys.
   */
  getByKey(
    cvmNumber: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>,
    rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalOrganizationAuditors<T>, T> {
    return new GetByKeyRequestBuilder<FiscalOrganizationAuditors<T>, T>(
      this.entityApi,
      {
        CVMNumber: cvmNumber,
        Name: name,
        RootFiscalEstablishmentDataArea: rootFiscalEstablishmentDataArea,
        RootFiscalEstablishment: rootFiscalEstablishment
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalOrganizationAuditors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalOrganizationAuditors`.
   */
  update(
    entity: FiscalOrganizationAuditors<T>
  ): UpdateRequestBuilder<FiscalOrganizationAuditors<T>, T> {
    return new UpdateRequestBuilder<FiscalOrganizationAuditors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationAuditors`.
   * @param cvmNumber Key property. See {@link FiscalOrganizationAuditors.cvmNumber}.
   * @param name Key property. See {@link FiscalOrganizationAuditors.name}.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationAuditors.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizationAuditors.rootFiscalEstablishment}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationAuditors`.
   */
  delete(
    cvmNumber: string,
    name: string,
    rootFiscalEstablishmentDataArea: string,
    rootFiscalEstablishment: string
  ): DeleteRequestBuilder<FiscalOrganizationAuditors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationAuditors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationAuditors` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalOrganizationAuditors<T>
  ): DeleteRequestBuilder<FiscalOrganizationAuditors<T>, T>;
  delete(
    cvmNumberOrEntity: any,
    name?: string,
    rootFiscalEstablishmentDataArea?: string,
    rootFiscalEstablishment?: string
  ): DeleteRequestBuilder<FiscalOrganizationAuditors<T>, T> {
    return new DeleteRequestBuilder<FiscalOrganizationAuditors<T>, T>(
      this.entityApi,
      cvmNumberOrEntity instanceof FiscalOrganizationAuditors
        ? cvmNumberOrEntity
        : {
            CVMNumber: cvmNumberOrEntity!,
            Name: name!,
            RootFiscalEstablishmentDataArea: rootFiscalEstablishmentDataArea!,
            RootFiscalEstablishment: rootFiscalEstablishment!
          }
    );
  }
}
