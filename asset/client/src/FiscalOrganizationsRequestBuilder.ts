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
import { FiscalOrganizations } from './FiscalOrganizations';

/**
 * Request builder class for operations supported on the {@link FiscalOrganizations} entity.
 */
export class FiscalOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalOrganizations<T>, T> {
    return new GetAllRequestBuilder<FiscalOrganizations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalOrganizations`.
   */
  create(
    entity: FiscalOrganizations<T>
  ): CreateRequestBuilder<FiscalOrganizations<T>, T> {
    return new CreateRequestBuilder<FiscalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalOrganizations` entity based on its keys.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizations.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizations.rootFiscalEstablishment}.
   * @returns A request builder for creating requests to retrieve one `FiscalOrganizations` entity based on its keys.
   */
  getByKey(
    rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>,
    rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<FiscalOrganizations<T>, T>(
      this.entityApi,
      {
        RootFiscalEstablishmentDataArea: rootFiscalEstablishmentDataArea,
        RootFiscalEstablishment: rootFiscalEstablishment
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalOrganizations`.
   */
  update(
    entity: FiscalOrganizations<T>
  ): UpdateRequestBuilder<FiscalOrganizations<T>, T> {
    return new UpdateRequestBuilder<FiscalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizations`.
   * @param rootFiscalEstablishmentDataArea Key property. See {@link FiscalOrganizations.rootFiscalEstablishmentDataArea}.
   * @param rootFiscalEstablishment Key property. See {@link FiscalOrganizations.rootFiscalEstablishment}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizations`.
   */
  delete(
    rootFiscalEstablishmentDataArea: string,
    rootFiscalEstablishment: string
  ): DeleteRequestBuilder<FiscalOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalOrganizations<T>
  ): DeleteRequestBuilder<FiscalOrganizations<T>, T>;
  delete(
    rootFiscalEstablishmentDataAreaOrEntity: any,
    rootFiscalEstablishment?: string
  ): DeleteRequestBuilder<FiscalOrganizations<T>, T> {
    return new DeleteRequestBuilder<FiscalOrganizations<T>, T>(
      this.entityApi,
      rootFiscalEstablishmentDataAreaOrEntity instanceof FiscalOrganizations
        ? rootFiscalEstablishmentDataAreaOrEntity
        : {
            RootFiscalEstablishmentDataArea:
              rootFiscalEstablishmentDataAreaOrEntity!,
            RootFiscalEstablishment: rootFiscalEstablishment!
          }
    );
  }
}
