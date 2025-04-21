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
import { SubBillScheduleTableBiEntities } from './SubBillScheduleTableBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillScheduleTableBiEntities} entity.
 */
export class SubBillScheduleTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillScheduleTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillScheduleTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<SubBillScheduleTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillScheduleTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillScheduleTableBiEntities`.
   */
  create(
    entity: SubBillScheduleTableBiEntities<T>
  ): CreateRequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
    return new CreateRequestBuilder<SubBillScheduleTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillScheduleTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillScheduleTableBiEntities.dataAreaId}.
   * @param subBillBillingScheduleNumber Key property. See {@link SubBillScheduleTableBiEntities.subBillBillingScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillScheduleTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SubBillScheduleTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SubBillBillingScheduleNumber: subBillBillingScheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillScheduleTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillScheduleTableBiEntities`.
   */
  update(
    entity: SubBillScheduleTableBiEntities<T>
  ): UpdateRequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<SubBillScheduleTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleTableBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillScheduleTableBiEntities.dataAreaId}.
   * @param subBillBillingScheduleNumber Key property. See {@link SubBillScheduleTableBiEntities.subBillBillingScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    subBillBillingScheduleNumber: string
  ): DeleteRequestBuilder<SubBillScheduleTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillScheduleTableBiEntities<T>
  ): DeleteRequestBuilder<SubBillScheduleTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    subBillBillingScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillScheduleTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<SubBillScheduleTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillScheduleTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SubBillBillingScheduleNumber: subBillBillingScheduleNumber!
          }
    );
  }
}
