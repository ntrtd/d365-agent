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
import { ChargeSalesLists } from './ChargeSalesLists';
import { ListStatus } from './ListStatus';

/**
 * Request builder class for operations supported on the {@link ChargeSalesLists} entity.
 */
export class ChargeSalesListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChargeSalesLists<T>, T> {
  /**
   * Returns a request builder for querying all `ChargeSalesLists` entities.
   * @returns A request builder for creating requests to retrieve all `ChargeSalesLists` entities.
   */
  getAll(): GetAllRequestBuilder<ChargeSalesLists<T>, T> {
    return new GetAllRequestBuilder<ChargeSalesLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChargeSalesLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChargeSalesLists`.
   */
  create(
    entity: ChargeSalesLists<T>
  ): CreateRequestBuilder<ChargeSalesLists<T>, T> {
    return new CreateRequestBuilder<ChargeSalesLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChargeSalesLists` entity based on its keys.
   * @param dataAreaId Key property. See {@link ChargeSalesLists.dataAreaId}.
   * @param reportingStatus Key property. See {@link ChargeSalesLists.reportingStatus}.
   * @param dispatch Key property. See {@link ChargeSalesLists.dispatch}.
   * @param number Key property. See {@link ChargeSalesLists.number}.
   * @returns A request builder for creating requests to retrieve one `ChargeSalesLists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportingStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ListStatus'
    >,
    dispatch: DeserializedType<T, 'Edm.String'>,
    number: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ChargeSalesLists<T>, T> {
    return new GetByKeyRequestBuilder<ChargeSalesLists<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReportingStatus: reportingStatus,
      Dispatch: dispatch,
      Number: number
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ChargeSalesLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChargeSalesLists`.
   */
  update(
    entity: ChargeSalesLists<T>
  ): UpdateRequestBuilder<ChargeSalesLists<T>, T> {
    return new UpdateRequestBuilder<ChargeSalesLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChargeSalesLists`.
   * @param dataAreaId Key property. See {@link ChargeSalesLists.dataAreaId}.
   * @param reportingStatus Key property. See {@link ChargeSalesLists.reportingStatus}.
   * @param dispatch Key property. See {@link ChargeSalesLists.dispatch}.
   * @param number Key property. See {@link ChargeSalesLists.number}.
   * @returns A request builder for creating requests that delete an entity of type `ChargeSalesLists`.
   */
  delete(
    dataAreaId: string,
    reportingStatus: ListStatus,
    dispatch: string,
    number: number
  ): DeleteRequestBuilder<ChargeSalesLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChargeSalesLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChargeSalesLists` by taking the entity as a parameter.
   */
  delete(
    entity: ChargeSalesLists<T>
  ): DeleteRequestBuilder<ChargeSalesLists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportingStatus?: ListStatus,
    dispatch?: string,
    number?: number
  ): DeleteRequestBuilder<ChargeSalesLists<T>, T> {
    return new DeleteRequestBuilder<ChargeSalesLists<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ChargeSalesLists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportingStatus: reportingStatus!,
            Dispatch: dispatch!,
            Number: number!
          }
    );
  }
}
