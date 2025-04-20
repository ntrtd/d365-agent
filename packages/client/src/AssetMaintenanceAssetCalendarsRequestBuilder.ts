/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetMaintenanceAssetCalendars } from './AssetMaintenanceAssetCalendars';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetCalendars} entity.
 */
export class AssetMaintenanceAssetCalendarsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetCalendars` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetCalendars` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetCalendars` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetCalendars`.
   */
  create(
    entity: AssetMaintenanceAssetCalendars<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetCalendars` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCalendars.dataAreaId}.
   * @param internalId Key property. See {@link AssetMaintenanceAssetCalendars.internalId}.
   * @param expectedStartOriginal Key property. See {@link AssetMaintenanceAssetCalendars.expectedStartOriginal}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCalendars.maintenanceAssetId}.
   * @param criticalityId Key property. See {@link AssetMaintenanceAssetCalendars.criticalityId}.
   * @param criticalityName Key property. See {@link AssetMaintenanceAssetCalendars.criticalityName}.
   * @param responsibleWorkerPersonnelNumber Key property. See {@link AssetMaintenanceAssetCalendars.responsibleWorkerPersonnelNumber}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetCalendars.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetCalendars.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetCalendars.jobVariantId}.
   * @param responsibleWorkerGroupId Key property. See {@link AssetMaintenanceAssetCalendars.responsibleWorkerGroupId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetCalendars.maintenancePlanId}.
   * @param maintenancePlanLineNumber Key property. See {@link AssetMaintenanceAssetCalendars.maintenancePlanLineNumber}.
   * @param requestId Key property. See {@link AssetMaintenanceAssetCalendars.requestId}.
   * @param maintenanceAssetRoundLineNumber Key property. See {@link AssetMaintenanceAssetCalendars.maintenanceAssetRoundLineNumber}.
   * @param roundId Key property. See {@link AssetMaintenanceAssetCalendars.roundId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetCalendars` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalId: DeserializedType<T, 'Edm.String'>,
    expectedStartOriginal: DeserializedType<T, 'Edm.DateTimeOffset'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    criticalityId: DeserializedType<T, 'Edm.Int32'>,
    criticalityName: DeserializedType<T, 'Edm.String'>,
    responsibleWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    responsibleWorkerGroupId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetRoundLineNumber: DeserializedType<T, 'Edm.Int64'>,
    roundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternalId: internalId,
        ExpectedStartOriginal: expectedStartOriginal,
        MaintenanceAssetId: maintenanceAssetId,
        CriticalityId: criticalityId,
        CriticalityName: criticalityName,
        ResponsibleWorkerPersonnelNumber: responsibleWorkerPersonnelNumber,
        JobTradeId: jobTradeId,
        JobTypeId: jobTypeId,
        JobVariantId: jobVariantId,
        ResponsibleWorkerGroupId: responsibleWorkerGroupId,
        MaintenancePlanId: maintenancePlanId,
        MaintenancePlanLineNumber: maintenancePlanLineNumber,
        RequestId: requestId,
        MaintenanceAssetRoundLineNumber: maintenanceAssetRoundLineNumber,
        RoundId: roundId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetCalendars`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetCalendars`.
   */
  update(
    entity: AssetMaintenanceAssetCalendars<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCalendars`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCalendars.dataAreaId}.
   * @param internalId Key property. See {@link AssetMaintenanceAssetCalendars.internalId}.
   * @param expectedStartOriginal Key property. See {@link AssetMaintenanceAssetCalendars.expectedStartOriginal}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCalendars.maintenanceAssetId}.
   * @param criticalityId Key property. See {@link AssetMaintenanceAssetCalendars.criticalityId}.
   * @param criticalityName Key property. See {@link AssetMaintenanceAssetCalendars.criticalityName}.
   * @param responsibleWorkerPersonnelNumber Key property. See {@link AssetMaintenanceAssetCalendars.responsibleWorkerPersonnelNumber}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetCalendars.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetCalendars.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetCalendars.jobVariantId}.
   * @param responsibleWorkerGroupId Key property. See {@link AssetMaintenanceAssetCalendars.responsibleWorkerGroupId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceAssetCalendars.maintenancePlanId}.
   * @param maintenancePlanLineNumber Key property. See {@link AssetMaintenanceAssetCalendars.maintenancePlanLineNumber}.
   * @param requestId Key property. See {@link AssetMaintenanceAssetCalendars.requestId}.
   * @param maintenanceAssetRoundLineNumber Key property. See {@link AssetMaintenanceAssetCalendars.maintenanceAssetRoundLineNumber}.
   * @param roundId Key property. See {@link AssetMaintenanceAssetCalendars.roundId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCalendars`.
   */
  delete(
    dataAreaId: string,
    internalId: string,
    expectedStartOriginal: Moment,
    maintenanceAssetId: string,
    criticalityId: number,
    criticalityName: string,
    responsibleWorkerPersonnelNumber: string,
    jobTradeId: string,
    jobTypeId: string,
    jobVariantId: string,
    responsibleWorkerGroupId: string,
    maintenancePlanId: string,
    maintenancePlanLineNumber: BigNumber,
    requestId: string,
    maintenanceAssetRoundLineNumber: BigNumber,
    roundId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCalendars`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCalendars` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetCalendars<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalId?: string,
    expectedStartOriginal?: Moment,
    maintenanceAssetId?: string,
    criticalityId?: number,
    criticalityName?: string,
    responsibleWorkerPersonnelNumber?: string,
    jobTradeId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    responsibleWorkerGroupId?: string,
    maintenancePlanId?: string,
    maintenancePlanLineNumber?: BigNumber,
    requestId?: string,
    maintenanceAssetRoundLineNumber?: BigNumber,
    roundId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCalendars<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetCalendars<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetCalendars
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalId: internalId!,
            ExpectedStartOriginal: expectedStartOriginal!,
            MaintenanceAssetId: maintenanceAssetId!,
            CriticalityId: criticalityId!,
            CriticalityName: criticalityName!,
            ResponsibleWorkerPersonnelNumber: responsibleWorkerPersonnelNumber!,
            JobTradeId: jobTradeId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            ResponsibleWorkerGroupId: responsibleWorkerGroupId!,
            MaintenancePlanId: maintenancePlanId!,
            MaintenancePlanLineNumber: maintenancePlanLineNumber!,
            RequestId: requestId!,
            MaintenanceAssetRoundLineNumber: maintenanceAssetRoundLineNumber!,
            RoundId: roundId!
          }
    );
  }
}
