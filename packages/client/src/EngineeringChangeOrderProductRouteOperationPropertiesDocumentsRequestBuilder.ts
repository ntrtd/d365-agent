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
import { EngineeringChangeOrderProductRouteOperationPropertiesDocuments } from './EngineeringChangeOrderProductRouteOperationPropertiesDocuments';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteHeaderProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.documentId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductRouteHeaderProductionSiteId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
      T,
      'Edm.Int32'
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
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductRouteHeaderProductionSiteId:
        engineeringChangeOrderProductRouteHeaderProductionSiteId,
      EngineeringChangeOrderProductRouteOperationId:
        engineeringChangeOrderProductRouteOperationId,
      EngineeringChangeOrderProductRouteOperationNumber:
        engineeringChangeOrderProductRouteOperationNumber,
      EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId:
        engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId,
      EngineeringChangeOrderProductRouteOperationPropertiesRouteId:
        engineeringChangeOrderProductRouteOperationPropertiesRouteId,
      EngineeringChangeOrderProductRouteOperationPropertiesItemNumber:
        engineeringChangeOrderProductRouteOperationPropertiesItemNumber,
      EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId:
        engineeringChangeOrderProductRouteOperationPropertiesProductGroupId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteHeaderProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteHeaderProductionSiteId: string,
    engineeringChangeOrderProductRouteOperationId: string,
    engineeringChangeOrderProductRouteOperationNumber: number,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: string,
    documentId: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteHeaderProductionSiteId?: string,
    engineeringChangeOrderProductRouteOperationId?: string,
    engineeringChangeOrderProductRouteOperationNumber?: number,
    engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesRouteId?: string,
    engineeringChangeOrderProductRouteOperationPropertiesItemNumber?: string,
    engineeringChangeOrderProductRouteOperationPropertiesProductGroupId?: string,
    documentId?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationPropertiesDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductRouteHeaderProductionSiteId:
              engineeringChangeOrderProductRouteHeaderProductionSiteId!,
            EngineeringChangeOrderProductRouteOperationId:
              engineeringChangeOrderProductRouteOperationId!,
            EngineeringChangeOrderProductRouteOperationNumber:
              engineeringChangeOrderProductRouteOperationNumber!,
            EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId:
              engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId!,
            EngineeringChangeOrderProductRouteOperationPropertiesRouteId:
              engineeringChangeOrderProductRouteOperationPropertiesRouteId!,
            EngineeringChangeOrderProductRouteOperationPropertiesItemNumber:
              engineeringChangeOrderProductRouteOperationPropertiesItemNumber!,
            EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId:
              engineeringChangeOrderProductRouteOperationPropertiesProductGroupId!,
            DocumentId: documentId!
          }
    );
  }
}
