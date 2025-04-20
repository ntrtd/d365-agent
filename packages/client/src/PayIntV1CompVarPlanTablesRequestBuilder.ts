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
import { PayIntV1CompVarPlanTables } from './PayIntV1CompVarPlanTables';

/**
 * Request builder class for operations supported on the {@link PayIntV1CompVarPlanTables} entity.
 */
export class PayIntV1CompVarPlanTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1CompVarPlanTables` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1CompVarPlanTables` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
    return new GetAllRequestBuilder<PayIntV1CompVarPlanTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1CompVarPlanTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1CompVarPlanTables`.
   */
  create(
    entity: PayIntV1CompVarPlanTables<T>
  ): CreateRequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
    return new CreateRequestBuilder<PayIntV1CompVarPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1CompVarPlanTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1CompVarPlanTables.dataAreaId}.
   * @param planId Key property. See {@link PayIntV1CompVarPlanTables.planId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1CompVarPlanTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1CompVarPlanTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1CompVarPlanTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1CompVarPlanTables`.
   */
  update(
    entity: PayIntV1CompVarPlanTables<T>
  ): UpdateRequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
    return new UpdateRequestBuilder<PayIntV1CompVarPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompVarPlanTables`.
   * @param dataAreaId Key property. See {@link PayIntV1CompVarPlanTables.dataAreaId}.
   * @param planId Key property. See {@link PayIntV1CompVarPlanTables.planId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompVarPlanTables`.
   */
  delete(
    dataAreaId: string,
    planId: string
  ): DeleteRequestBuilder<PayIntV1CompVarPlanTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompVarPlanTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompVarPlanTables` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1CompVarPlanTables<T>
  ): DeleteRequestBuilder<PayIntV1CompVarPlanTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string
  ): DeleteRequestBuilder<PayIntV1CompVarPlanTables<T>, T> {
    return new DeleteRequestBuilder<PayIntV1CompVarPlanTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1CompVarPlanTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!
          }
    );
  }
}
