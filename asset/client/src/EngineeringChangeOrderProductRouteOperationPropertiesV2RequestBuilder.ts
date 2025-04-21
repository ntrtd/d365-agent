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
import { EngineeringChangeOrderProductRouteOperationPropertiesV2 } from './EngineeringChangeOrderProductRouteOperationPropertiesV2';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationPropertiesV2} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationPropertiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationPropertiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationPropertiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationPropertiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param operationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.operationId}.
   * @param routeId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.routeId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.productConfigurationId}.
   * @param productGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.productGroupId}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.itemNumber}.
   * @param routeOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.routeOperationPropertiesChangeType}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationPropertiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    engineeringChangeOrderProductRouteOperationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
    >,
    engineeringChangeOrderProductRouteOperationChangeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes'
    >,
    operationId: DeserializedType<T, 'Edm.String'>,
    routeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productGroupId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    routeOperationPropertiesChangeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes'
    >
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
        engineeringChangeOrderProductRouteHeaderCreationSequenceNumber,
      EngineeringChangeOrderProductRouteOperationNumber:
        engineeringChangeOrderProductRouteOperationNumber,
      EngineeringChangeOrderProductRouteOperationPriority:
        engineeringChangeOrderProductRouteOperationPriority,
      EngineeringChangeOrderProductRouteOperationChangeType:
        engineeringChangeOrderProductRouteOperationChangeType,
      OperationId: operationId,
      RouteId: routeId,
      ProductConfigurationId: productConfigurationId,
      ProductGroupId: productGroupId,
      ItemNumber: itemNumber,
      RouteOperationPropertiesChangeType: routeOperationPropertiesChangeType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param operationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.operationId}.
   * @param routeId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.routeId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.productConfigurationId}.
   * @param productGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.productGroupId}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.itemNumber}.
   * @param routeOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesV2.routeOperationPropertiesChangeType}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number,
    engineeringChangeOrderProductRouteOperationNumber: number,
    engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationChangeType: EngChgEcmChangeTypes,
    operationId: string,
    routeId: string,
    productConfigurationId: string,
    productGroupId: string,
    itemNumber: string,
    routeOperationPropertiesChangeType: EngChgEcmChangeTypes
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesV2<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber?: number,
    engineeringChangeOrderProductRouteOperationNumber?: number,
    engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes,
    operationId?: string,
    routeId?: string,
    productConfigurationId?: string,
    productGroupId?: string,
    itemNumber?: string,
    routeOperationPropertiesChangeType?: EngChgEcmChangeTypes
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationPropertiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
              engineeringChangeOrderProductRouteHeaderCreationSequenceNumber!,
            EngineeringChangeOrderProductRouteOperationNumber:
              engineeringChangeOrderProductRouteOperationNumber!,
            EngineeringChangeOrderProductRouteOperationPriority:
              engineeringChangeOrderProductRouteOperationPriority!,
            EngineeringChangeOrderProductRouteOperationChangeType:
              engineeringChangeOrderProductRouteOperationChangeType!,
            OperationId: operationId!,
            RouteId: routeId!,
            ProductConfigurationId: productConfigurationId!,
            ProductGroupId: productGroupId!,
            ItemNumber: itemNumber!,
            RouteOperationPropertiesChangeType:
              routeOperationPropertiesChangeType!
          }
    );
  }
}
