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
import { ProjCfdaNumbers } from './ProjCfdaNumbers';

/**
 * Request builder class for operations supported on the {@link ProjCfdaNumbers} entity.
 */
export class ProjCfdaNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjCfdaNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `ProjCfdaNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `ProjCfdaNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<ProjCfdaNumbers<T>, T> {
    return new GetAllRequestBuilder<ProjCfdaNumbers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjCfdaNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjCfdaNumbers`.
   */
  create(
    entity: ProjCfdaNumbers<T>
  ): CreateRequestBuilder<ProjCfdaNumbers<T>, T> {
    return new CreateRequestBuilder<ProjCfdaNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjCfdaNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjCfdaNumbers.dataAreaId}.
   * @param cfdaid Key property. See {@link ProjCfdaNumbers.cfdaid}.
   * @returns A request builder for creating requests to retrieve one `ProjCfdaNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cfdaid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjCfdaNumbers<T>, T> {
    return new GetByKeyRequestBuilder<ProjCfdaNumbers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CFDAID: cfdaid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjCfdaNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjCfdaNumbers`.
   */
  update(
    entity: ProjCfdaNumbers<T>
  ): UpdateRequestBuilder<ProjCfdaNumbers<T>, T> {
    return new UpdateRequestBuilder<ProjCfdaNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjCfdaNumbers`.
   * @param dataAreaId Key property. See {@link ProjCfdaNumbers.dataAreaId}.
   * @param cfdaid Key property. See {@link ProjCfdaNumbers.cfdaid}.
   * @returns A request builder for creating requests that delete an entity of type `ProjCfdaNumbers`.
   */
  delete(
    dataAreaId: string,
    cfdaid: string
  ): DeleteRequestBuilder<ProjCfdaNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjCfdaNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjCfdaNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: ProjCfdaNumbers<T>
  ): DeleteRequestBuilder<ProjCfdaNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cfdaid?: string
  ): DeleteRequestBuilder<ProjCfdaNumbers<T>, T> {
    return new DeleteRequestBuilder<ProjCfdaNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjCfdaNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CFDAID: cfdaid!
          }
    );
  }
}
