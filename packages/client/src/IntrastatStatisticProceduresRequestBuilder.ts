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
import { IntrastatStatisticProcedures } from './IntrastatStatisticProcedures';

/**
 * Request builder class for operations supported on the {@link IntrastatStatisticProcedures} entity.
 */
export class IntrastatStatisticProceduresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatStatisticProcedures<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatStatisticProcedures` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatStatisticProcedures` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatStatisticProcedures<T>, T> {
    return new GetAllRequestBuilder<IntrastatStatisticProcedures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatStatisticProcedures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatStatisticProcedures`.
   */
  create(
    entity: IntrastatStatisticProcedures<T>
  ): CreateRequestBuilder<IntrastatStatisticProcedures<T>, T> {
    return new CreateRequestBuilder<IntrastatStatisticProcedures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatStatisticProcedures` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatStatisticProcedures.dataAreaId}.
   * @param statisticProcedureId Key property. See {@link IntrastatStatisticProcedures.statisticProcedureId}.
   * @returns A request builder for creating requests to retrieve one `IntrastatStatisticProcedures` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statisticProcedureId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatStatisticProcedures<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatStatisticProcedures<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StatisticProcedureId: statisticProcedureId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatStatisticProcedures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatStatisticProcedures`.
   */
  update(
    entity: IntrastatStatisticProcedures<T>
  ): UpdateRequestBuilder<IntrastatStatisticProcedures<T>, T> {
    return new UpdateRequestBuilder<IntrastatStatisticProcedures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatStatisticProcedures`.
   * @param dataAreaId Key property. See {@link IntrastatStatisticProcedures.dataAreaId}.
   * @param statisticProcedureId Key property. See {@link IntrastatStatisticProcedures.statisticProcedureId}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatStatisticProcedures`.
   */
  delete(
    dataAreaId: string,
    statisticProcedureId: string
  ): DeleteRequestBuilder<IntrastatStatisticProcedures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatStatisticProcedures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatStatisticProcedures` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatStatisticProcedures<T>
  ): DeleteRequestBuilder<IntrastatStatisticProcedures<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statisticProcedureId?: string
  ): DeleteRequestBuilder<IntrastatStatisticProcedures<T>, T> {
    return new DeleteRequestBuilder<IntrastatStatisticProcedures<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatStatisticProcedures
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatisticProcedureId: statisticProcedureId!
          }
    );
  }
}
