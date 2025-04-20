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
import { SrsFinanceCopilots } from './SrsFinanceCopilots';

/**
 * Request builder class for operations supported on the {@link SrsFinanceCopilots} entity.
 */
export class SrsFinanceCopilotsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrsFinanceCopilots<T>, T> {
  /**
   * Returns a request builder for querying all `SrsFinanceCopilots` entities.
   * @returns A request builder for creating requests to retrieve all `SrsFinanceCopilots` entities.
   */
  getAll(): GetAllRequestBuilder<SrsFinanceCopilots<T>, T> {
    return new GetAllRequestBuilder<SrsFinanceCopilots<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SrsFinanceCopilots` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrsFinanceCopilots`.
   */
  create(
    entity: SrsFinanceCopilots<T>
  ): CreateRequestBuilder<SrsFinanceCopilots<T>, T> {
    return new CreateRequestBuilder<SrsFinanceCopilots<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SrsFinanceCopilots` entity based on its keys.
   * @param dataAreaId Key property. See {@link SrsFinanceCopilots.dataAreaId}.
   * @param reportMenuItemName Key property. See {@link SrsFinanceCopilots.reportMenuItemName}.
   * @returns A request builder for creating requests to retrieve one `SrsFinanceCopilots` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportMenuItemName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrsFinanceCopilots<T>, T> {
    return new GetByKeyRequestBuilder<SrsFinanceCopilots<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReportMenuItemName: reportMenuItemName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SrsFinanceCopilots`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrsFinanceCopilots`.
   */
  update(
    entity: SrsFinanceCopilots<T>
  ): UpdateRequestBuilder<SrsFinanceCopilots<T>, T> {
    return new UpdateRequestBuilder<SrsFinanceCopilots<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SrsFinanceCopilots`.
   * @param dataAreaId Key property. See {@link SrsFinanceCopilots.dataAreaId}.
   * @param reportMenuItemName Key property. See {@link SrsFinanceCopilots.reportMenuItemName}.
   * @returns A request builder for creating requests that delete an entity of type `SrsFinanceCopilots`.
   */
  delete(
    dataAreaId: string,
    reportMenuItemName: string
  ): DeleteRequestBuilder<SrsFinanceCopilots<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrsFinanceCopilots`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SrsFinanceCopilots` by taking the entity as a parameter.
   */
  delete(
    entity: SrsFinanceCopilots<T>
  ): DeleteRequestBuilder<SrsFinanceCopilots<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportMenuItemName?: string
  ): DeleteRequestBuilder<SrsFinanceCopilots<T>, T> {
    return new DeleteRequestBuilder<SrsFinanceCopilots<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SrsFinanceCopilots
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportMenuItemName: reportMenuItemName!
          }
    );
  }
}
