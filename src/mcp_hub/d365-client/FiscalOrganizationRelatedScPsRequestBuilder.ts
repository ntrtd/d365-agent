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
import { FiscalOrganizationRelatedScPs } from './FiscalOrganizationRelatedScPs';

/**
 * Request builder class for operations supported on the {@link FiscalOrganizationRelatedScPs} entity.
 */
export class FiscalOrganizationRelatedScPsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalOrganizationRelatedScPs` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalOrganizationRelatedScPs` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
    return new GetAllRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalOrganizationRelatedScPs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalOrganizationRelatedScPs`.
   */
  create(
    entity: FiscalOrganizationRelatedScPs<T>
  ): CreateRequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
    return new CreateRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalOrganizationRelatedScPs` entity based on its keys.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationRelatedScPs.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizationRelatedScPs.rootFiscalEstablishment}.
   * @param code Key property. See {@link FiscalOrganizationRelatedScPs.code}.
   * @param name Key property. See {@link FiscalOrganizationRelatedScPs.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalOrganizationRelatedScPs` entity based on its keys.
   */
  getByKey(
    rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>,
    rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
    return new GetByKeyRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>(
      this.entityApi,
      {
        RootFiscalEstablishmentDataArea: rootFiscalEstablishmentDataArea,
        RootFiscalEstablishment: rootFiscalEstablishment,
        Code: code,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalOrganizationRelatedScPs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalOrganizationRelatedScPs`.
   */
  update(
    entity: FiscalOrganizationRelatedScPs<T>
  ): UpdateRequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
    return new UpdateRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationRelatedScPs`.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizationRelatedScPs.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizationRelatedScPs.rootFiscalEstablishment}.
   * @param code Key property. See {@link FiscalOrganizationRelatedScPs.code}.
   * @param name Key property. See {@link FiscalOrganizationRelatedScPs.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationRelatedScPs`.
   */
  delete(
    rootFiscalEstablishmentDataArea: string,
    rootFiscalEstablishment: string,
    code: string,
    name: string
  ): DeleteRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizationRelatedScPs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizationRelatedScPs` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalOrganizationRelatedScPs<T>
  ): DeleteRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>;
  delete(
    rootFiscalEstablishmentDataAreaOrEntity: any,
    rootFiscalEstablishment?: string,
    code?: string,
    name?: string
  ): DeleteRequestBuilder<FiscalOrganizationRelatedScPs<T>, T> {
    return new DeleteRequestBuilder<FiscalOrganizationRelatedScPs<T>, T>(
      this.entityApi,
      rootFiscalEstablishmentDataAreaOrEntity instanceof
      FiscalOrganizationRelatedScPs
        ? rootFiscalEstablishmentDataAreaOrEntity
        : {
            RootFiscalEstablishmentDataArea:
              rootFiscalEstablishmentDataAreaOrEntity!,
            RootFiscalEstablishment: rootFiscalEstablishment!,
            Code: code!,
            Name: name!
          }
    );
  }
}
