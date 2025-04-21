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
import { EngineeringChangeOrderProductRouteOperationsV2 } from './EngineeringChangeOrderProductRouteOperationsV2';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationsV2} entity.
 */
export class EngineeringChangeOrderProductRouteOperationsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductRouteOperationsV2<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationsV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationsV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationsV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param operationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.operationNumber}.
   * @param operationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.operationPriority}.
   * @param changeType Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.changeType}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    operationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
    >,
    changeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes'
    >
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
        engineeringChangeOrderProductRouteHeaderCreationSequenceNumber,
      OperationNumber: operationNumber,
      OperationPriority: operationPriority,
      ChangeType: changeType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationsV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationsV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param operationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.operationNumber}.
   * @param operationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.operationPriority}.
   * @param changeType Key property. See {@link EngineeringChangeOrderProductRouteOperationsV2.changeType}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number,
    operationNumber: number,
    operationPriority: RouteOprPriority,
    changeType: EngChgEcmChangeTypes
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteOperationsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationsV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationsV2<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteOperationsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber?: number,
    operationNumber?: number,
    operationPriority?: RouteOprPriority,
    changeType?: EngChgEcmChangeTypes
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationsV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
              engineeringChangeOrderProductRouteHeaderCreationSequenceNumber!,
            OperationNumber: operationNumber!,
            OperationPriority: operationPriority!,
            ChangeType: changeType!
          }
    );
  }
}
