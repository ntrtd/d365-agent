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
import { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2 } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { RouteOprPriority } from './RouteOprPriority';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesChangeType}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.documentId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` entity based on its keys.
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
    engineeringChangeOrderProductRouteOperationChangeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes'
    >,
    engineeringChangeOrderProductRouteOperationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
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
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
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
      EngineeringChangeOrderProductRouteOperationChangeType:
        engineeringChangeOrderProductRouteOperationChangeType,
      EngineeringChangeOrderProductRouteOperationPriority:
        engineeringChangeOrderProductRouteOperationPriority,
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
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationChangeType}.
   * @param engineeringChangeOrderProductRouteOperationPriority Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPriority}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesChangeType Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.engineeringChangeOrderProductRouteOperationPropertiesChangeType}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number,
    engineeringChangeOrderProductRouteOperationId: string,
    engineeringChangeOrderProductRouteOperationNumber: number,
    engineeringChangeOrderProductRouteOperationChangeType: EngChgEcmChangeTypes,
    engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: string,
    engineeringChangeOrderProductRouteOperationPropertiesChangeType: EngChgEcmChangeTypes,
    documentId: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteHeaderCreationSequenceNumber?: number,
    engineeringChangeOrderProductRouteOperationId?: string,
    engineeringChangeOrderProductRouteOperationNumber?: number,
    engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes,
    engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber?: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesChangeType?: EngChgEcmChangeTypes,
    documentId?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2
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
            EngineeringChangeOrderProductRouteOperationChangeType:
              engineeringChangeOrderProductRouteOperationChangeType!,
            EngineeringChangeOrderProductRouteOperationPriority:
              engineeringChangeOrderProductRouteOperationPriority!,
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
            DocumentId: documentId!
          }
    );
  }
}
