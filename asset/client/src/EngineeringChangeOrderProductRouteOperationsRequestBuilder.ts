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
import { EngineeringChangeOrderProductRouteOperations } from './EngineeringChangeOrderProductRouteOperations';
import { RouteOprPriority } from './RouteOprPriority';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperations} entity.
 */
export class EngineeringChangeOrderProductRouteOperationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperations` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperations` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperations`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperations<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperations` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperations.dataAreaId}.
   * @param operationId Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationId}.
   * @param operationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationNumber}.
   * @param engineeringChangeOrderProductRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderProductRouteId}.
   * @param operationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationPriority}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderProductLineNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationId: DeserializedType<T, 'Edm.String'>,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    engineeringChangeOrderProductRouteId: DeserializedType<T, 'Edm.String'>,
    operationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
    >,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationId: operationId,
      OperationNumber: operationNumber,
      EngineeringChangeOrderProductRouteId:
        engineeringChangeOrderProductRouteId,
      OperationPriority: operationPriority,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperations`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperations<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperations`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperations.dataAreaId}.
   * @param operationId Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationId}.
   * @param operationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationNumber}.
   * @param engineeringChangeOrderProductRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderProductRouteId}.
   * @param operationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperations.operationPriority}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperations.engineeringChangeOrderProductLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperations`.
   */
  delete(
    dataAreaId: string,
    operationId: string,
    operationNumber: number,
    engineeringChangeOrderProductRouteId: string,
    operationPriority: RouteOprPriority,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperations` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperations<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationId?: string,
    operationNumber?: number,
    engineeringChangeOrderProductRouteId?: string,
    operationPriority?: RouteOprPriority,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteOperations<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductRouteOperations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationId: operationId!,
            OperationNumber: operationNumber!,
            EngineeringChangeOrderProductRouteId:
              engineeringChangeOrderProductRouteId!,
            OperationPriority: operationPriority!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!
          }
    );
  }
}
