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
import { LtmReasonTables } from './LtmReasonTables';

/**
 * Request builder class for operations supported on the {@link LtmReasonTables} entity.
 */
export class LtmReasonTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmReasonTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmReasonTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmReasonTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmReasonTables<T>, T> {
    return new GetAllRequestBuilder<LtmReasonTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmReasonTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmReasonTables`.
   */
  create(
    entity: LtmReasonTables<T>
  ): CreateRequestBuilder<LtmReasonTables<T>, T> {
    return new CreateRequestBuilder<LtmReasonTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmReasonTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmReasonTables.dataAreaId}.
   * @param reasonCode Key property. See {@link LtmReasonTables.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `LtmReasonTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmReasonTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmReasonTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonCode: reasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmReasonTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmReasonTables`.
   */
  update(
    entity: LtmReasonTables<T>
  ): UpdateRequestBuilder<LtmReasonTables<T>, T> {
    return new UpdateRequestBuilder<LtmReasonTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmReasonTables`.
   * @param dataAreaId Key property. See {@link LtmReasonTables.dataAreaId}.
   * @param reasonCode Key property. See {@link LtmReasonTables.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `LtmReasonTables`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<LtmReasonTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmReasonTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmReasonTables` by taking the entity as a parameter.
   */
  delete(
    entity: LtmReasonTables<T>
  ): DeleteRequestBuilder<LtmReasonTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<LtmReasonTables<T>, T> {
    return new DeleteRequestBuilder<LtmReasonTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmReasonTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
