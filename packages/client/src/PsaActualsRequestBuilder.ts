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
import { PsaActuals } from './PsaActuals';

/**
 * Request builder class for operations supported on the {@link PsaActuals} entity.
 */
export class PsaActualsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PsaActuals<T>, T> {
  /**
   * Returns a request builder for querying all `PsaActuals` entities.
   * @returns A request builder for creating requests to retrieve all `PsaActuals` entities.
   */
  getAll(): GetAllRequestBuilder<PsaActuals<T>, T> {
    return new GetAllRequestBuilder<PsaActuals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PsaActuals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PsaActuals`.
   */
  create(entity: PsaActuals<T>): CreateRequestBuilder<PsaActuals<T>, T> {
    return new CreateRequestBuilder<PsaActuals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PsaActuals` entity based on its keys.
   * @param dataAreaId Key property. See {@link PsaActuals.dataAreaId}.
   * @param transId Key property. See {@link PsaActuals.transId}.
   * @returns A request builder for creating requests to retrieve one `PsaActuals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PsaActuals<T>, T> {
    return new GetByKeyRequestBuilder<PsaActuals<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransId: transId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PsaActuals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PsaActuals`.
   */
  update(entity: PsaActuals<T>): UpdateRequestBuilder<PsaActuals<T>, T> {
    return new UpdateRequestBuilder<PsaActuals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PsaActuals`.
   * @param dataAreaId Key property. See {@link PsaActuals.dataAreaId}.
   * @param transId Key property. See {@link PsaActuals.transId}.
   * @returns A request builder for creating requests that delete an entity of type `PsaActuals`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<PsaActuals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PsaActuals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PsaActuals` by taking the entity as a parameter.
   */
  delete(entity: PsaActuals<T>): DeleteRequestBuilder<PsaActuals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<PsaActuals<T>, T> {
    return new DeleteRequestBuilder<PsaActuals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PsaActuals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
