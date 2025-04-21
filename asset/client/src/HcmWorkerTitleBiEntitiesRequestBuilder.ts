/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { HcmWorkerTitleBiEntities } from './HcmWorkerTitleBiEntities';

/**
 * Request builder class for operations supported on the {@link HcmWorkerTitleBiEntities} entity.
 */
export class HcmWorkerTitleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `HcmWorkerTitleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `HcmWorkerTitleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
    return new GetAllRequestBuilder<HcmWorkerTitleBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HcmWorkerTitleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmWorkerTitleBiEntities`.
   */
  create(
    entity: HcmWorkerTitleBiEntities<T>
  ): CreateRequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
    return new CreateRequestBuilder<HcmWorkerTitleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmWorkerTitleBiEntities` entity based on its keys.
   * @param worker Key property. See {@link HcmWorkerTitleBiEntities.worker}.
   * @param validFrom Key property. See {@link HcmWorkerTitleBiEntities.validFrom}.
   * @param validTo Key property. See {@link HcmWorkerTitleBiEntities.validTo}.
   * @returns A request builder for creating requests to retrieve one `HcmWorkerTitleBiEntities` entity based on its keys.
   */
  getByKey(
    worker: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<HcmWorkerTitleBiEntities<T>, T>(
      this.entityApi,
      {
        Worker: worker,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmWorkerTitleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmWorkerTitleBiEntities`.
   */
  update(
    entity: HcmWorkerTitleBiEntities<T>
  ): UpdateRequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
    return new UpdateRequestBuilder<HcmWorkerTitleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerTitleBiEntities`.
   * @param worker Key property. See {@link HcmWorkerTitleBiEntities.worker}.
   * @param validFrom Key property. See {@link HcmWorkerTitleBiEntities.validFrom}.
   * @param validTo Key property. See {@link HcmWorkerTitleBiEntities.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerTitleBiEntities`.
   */
  delete(
    worker: BigNumber,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<HcmWorkerTitleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerTitleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerTitleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: HcmWorkerTitleBiEntities<T>
  ): DeleteRequestBuilder<HcmWorkerTitleBiEntities<T>, T>;
  delete(
    workerOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<HcmWorkerTitleBiEntities<T>, T> {
    return new DeleteRequestBuilder<HcmWorkerTitleBiEntities<T>, T>(
      this.entityApi,
      workerOrEntity instanceof HcmWorkerTitleBiEntities
        ? workerOrEntity
        : {
            Worker: workerOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
