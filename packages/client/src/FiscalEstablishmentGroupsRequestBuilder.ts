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
import { FiscalEstablishmentGroups } from './FiscalEstablishmentGroups';

/**
 * Request builder class for operations supported on the {@link FiscalEstablishmentGroups} entity.
 */
export class FiscalEstablishmentGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalEstablishmentGroups<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalEstablishmentGroups` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalEstablishmentGroups` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalEstablishmentGroups<T>, T> {
    return new GetAllRequestBuilder<FiscalEstablishmentGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalEstablishmentGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalEstablishmentGroups`.
   */
  create(
    entity: FiscalEstablishmentGroups<T>
  ): CreateRequestBuilder<FiscalEstablishmentGroups<T>, T> {
    return new CreateRequestBuilder<FiscalEstablishmentGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalEstablishmentGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalEstablishmentGroups.dataAreaId}.
   * @param fiscalEstablishmentGroup Key property. See {@link FiscalEstablishmentGroups.fiscalEstablishmentGroup}.
   * @returns A request builder for creating requests to retrieve one `FiscalEstablishmentGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalEstablishmentGroups<T>, T> {
    return new GetByKeyRequestBuilder<FiscalEstablishmentGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalEstablishmentGroup: fiscalEstablishmentGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalEstablishmentGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalEstablishmentGroups`.
   */
  update(
    entity: FiscalEstablishmentGroups<T>
  ): UpdateRequestBuilder<FiscalEstablishmentGroups<T>, T> {
    return new UpdateRequestBuilder<FiscalEstablishmentGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishmentGroups`.
   * @param dataAreaId Key property. See {@link FiscalEstablishmentGroups.dataAreaId}.
   * @param fiscalEstablishmentGroup Key property. See {@link FiscalEstablishmentGroups.fiscalEstablishmentGroup}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishmentGroups`.
   */
  delete(
    dataAreaId: string,
    fiscalEstablishmentGroup: string
  ): DeleteRequestBuilder<FiscalEstablishmentGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalEstablishmentGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalEstablishmentGroups` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalEstablishmentGroups<T>
  ): DeleteRequestBuilder<FiscalEstablishmentGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalEstablishmentGroup?: string
  ): DeleteRequestBuilder<FiscalEstablishmentGroups<T>, T> {
    return new DeleteRequestBuilder<FiscalEstablishmentGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalEstablishmentGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalEstablishmentGroup: fiscalEstablishmentGroup!
          }
    );
  }
}
