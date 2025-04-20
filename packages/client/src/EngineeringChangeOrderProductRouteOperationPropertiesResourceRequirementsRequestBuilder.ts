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
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteHeaderProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param routeOperationPropertiesResourceRequirementRecordId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.routeOperationPropertiesResourceRequirementRecordId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` entity based on its keys.
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
    routeOperationPropertiesResourceRequirementRecordId: DeserializedType<
      T,
      'Edm.Int64'
    >
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
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
      RouteOperationPropertiesResourceRequirementRecordId:
        routeOperationPropertiesResourceRequirementRecordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteHeaderProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteHeaderProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesRouteId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesRouteId}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesItemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesItemNumber}.
   * @param engineeringChangeOrderProductRouteOperationPropertiesProductGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.engineeringChangeOrderProductRouteOperationPropertiesProductGroupId}.
   * @param routeOperationPropertiesResourceRequirementRecordId Key property. See {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.routeOperationPropertiesResourceRequirementRecordId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
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
    routeOperationPropertiesResourceRequirementRecordId: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
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
    routeOperationPropertiesResourceRequirementRecordId?: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements
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
            RouteOperationPropertiesResourceRequirementRecordId:
              routeOperationPropertiesResourceRequirementRecordId!
          }
    );
  }
}
