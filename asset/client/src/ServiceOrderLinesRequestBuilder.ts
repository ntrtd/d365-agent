/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { ServiceOrderLines } from './ServiceOrderLines';

/**
 * Request builder class for operations supported on the {@link ServiceOrderLines} entity.
 */
export class ServiceOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderLines<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderLines`.
   */
  create(
    entity: ServiceOrderLines<T>
  ): CreateRequestBuilder<ServiceOrderLines<T>, T> {
    return new CreateRequestBuilder<ServiceOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceOrderLines.dataAreaId}.
   * @param serviceOrderNumber Key property. See {@link ServiceOrderLines.serviceOrderNumber}.
   * @param lineNumber Key property. See {@link ServiceOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ServiceOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ServiceOrderNumber: serviceOrderNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderLines`.
   */
  update(
    entity: ServiceOrderLines<T>
  ): UpdateRequestBuilder<ServiceOrderLines<T>, T> {
    return new UpdateRequestBuilder<ServiceOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderLines`.
   * @param dataAreaId Key property. See {@link ServiceOrderLines.dataAreaId}.
   * @param serviceOrderNumber Key property. See {@link ServiceOrderLines.serviceOrderNumber}.
   * @param lineNumber Key property. See {@link ServiceOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderLines`.
   */
  delete(
    dataAreaId: string,
    serviceOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ServiceOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderLines<T>
  ): DeleteRequestBuilder<ServiceOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ServiceOrderLines<T>, T> {
    return new DeleteRequestBuilder<ServiceOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceOrderNumber: serviceOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
