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
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2 } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesChangeType}.
   * @param routeOperationPropertiesResourceRequirementRecordId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.routeOperationPropertiesResourceRequirementRecordId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    engineeringChangeOrderProductRouteOperationId: DeserializedType<
      T,
      'Edm.String'
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
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationPropertiesChangeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes'
    >,
    routeOperationPropertiesResourceRequirementRecordId: DeserializedType<
      T,
      'Edm.Int64'
    >
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
        engineeringChangeOrderProductRouteHeaderCreationSequenceNumber,
      EngineeringChangeOrderProductRouteOperationId:
        engineeringChangeOrderProductRouteOperationId,
      EngineeringChangeOrderProductRouteOperationNumber:
        engineeringChangeOrderProductRouteOperationNumber,
      EngineeringChangeOrderProductRouteOperationPriority:
        engineeringChangeOrderProductRouteOperationPriority,
      EngineeringChangeOrderProductRouteOperationChangeType:
        engineeringChangeOrderProductRouteOperationChangeType,
      EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId:
        engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId,
      EngineeringChangeOrderProductRouteOperationPropertiesRouteId:
        engineeringChangeOrderProductRouteOperationPropertiesRouteId,
      EngineeringChangeOrderProductRouteOperationPropertiesItemNumber:
        engineeringChangeOrderProductRouteOperationPropertiesItemNumber,
      EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId:
        engineeringChangeOrderProductRouteOperationPropertiesProductGroupId,
      EngineeringChangeOrderProductRouteOperationPropertiesChangeType:
        engineeringChangeOrderProductRouteOperationPropertiesChangeType,
      RouteOperationPropertiesResourceRequirementRecordId:
        routeOperationPropertiesResourceRequirementRecordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.engineeringChangeOrderProductRouteOperationPropertiesChangeType}.
   * @param routeOperationPropertiesResourceRequirementRecordId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2.routeOperationPropertiesResourceRequirementRecordId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number,
    engineeringChangeOrderProductRouteOperationId: string,
    engineeringChangeOrderProductRouteOperationNumber: number,
    engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationChangeType: EngChgEcmChangeTypes,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: string,
    engineeringChangeOrderProductRouteOperationPropertiesChangeType: EngChgEcmChangeTypes,
    routeOperationPropertiesResourceRequirementRecordId: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber?: number,
    engineeringChangeOrderProductRouteOperationId?: string,
    engineeringChangeOrderProductRouteOperationNumber?: number,
    engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber?: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesChangeType?: EngChgEcmChangeTypes,
    routeOperationPropertiesResourceRequirementRecordId?: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber:
              engineeringChangeOrderProductRouteHeaderCreationSequenceNumber!,
            EngineeringChangeOrderProductRouteOperationId:
              engineeringChangeOrderProductRouteOperationId!,
            EngineeringChangeOrderProductRouteOperationNumber:
              engineeringChangeOrderProductRouteOperationNumber!,
            EngineeringChangeOrderProductRouteOperationPriority:
              engineeringChangeOrderProductRouteOperationPriority!,
            EngineeringChangeOrderProductRouteOperationChangeType:
              engineeringChangeOrderProductRouteOperationChangeType!,
            EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId:
              engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId!,
            EngineeringChangeOrderProductRouteOperationPropertiesRouteId:
              engineeringChangeOrderProductRouteOperationPropertiesRouteId!,
            EngineeringChangeOrderProductRouteOperationPropertiesItemNumber:
              engineeringChangeOrderProductRouteOperationPropertiesItemNumber!,
            EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId:
              engineeringChangeOrderProductRouteOperationPropertiesProductGroupId!,
            EngineeringChangeOrderProductRouteOperationPropertiesChangeType:
              engineeringChangeOrderProductRouteOperationPropertiesChangeType!,
            RouteOperationPropertiesResourceRequirementRecordId:
              routeOperationPropertiesResourceRequirementRecordId!
          }
    );
  }
}
