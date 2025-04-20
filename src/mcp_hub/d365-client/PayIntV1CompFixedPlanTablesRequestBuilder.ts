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
import { PayIntV1CompFixedPlanTables } from './PayIntV1CompFixedPlanTables';

/**
 * Request builder class for operations supported on the {@link PayIntV1CompFixedPlanTables} entity.
 */
export class PayIntV1CompFixedPlanTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1CompFixedPlanTables` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1CompFixedPlanTables` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
    return new GetAllRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1CompFixedPlanTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1CompFixedPlanTables`.
   */
  create(
    entity: PayIntV1CompFixedPlanTables<T>
  ): CreateRequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
    return new CreateRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1CompFixedPlanTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1CompFixedPlanTables.dataAreaId}.
   * @param plan Key property. See {@link PayIntV1CompFixedPlanTables.plan}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1CompFixedPlanTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Plan: plan
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1CompFixedPlanTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1CompFixedPlanTables`.
   */
  update(
    entity: PayIntV1CompFixedPlanTables<T>
  ): UpdateRequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
    return new UpdateRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompFixedPlanTables`.
   * @param dataAreaId Key property. See {@link PayIntV1CompFixedPlanTables.dataAreaId}.
   * @param plan Key property. See {@link PayIntV1CompFixedPlanTables.plan}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompFixedPlanTables`.
   */
  delete(
    dataAreaId: string,
    plan: string
  ): DeleteRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompFixedPlanTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompFixedPlanTables` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1CompFixedPlanTables<T>
  ): DeleteRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    plan?: string
  ): DeleteRequestBuilder<PayIntV1CompFixedPlanTables<T>, T> {
    return new DeleteRequestBuilder<PayIntV1CompFixedPlanTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1CompFixedPlanTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Plan: plan!
          }
    );
  }
}
