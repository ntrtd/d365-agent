/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { DeductionArrearRecoveries } from './DeductionArrearRecoveries';
import { PrlArrearOffsetType } from './PrlArrearOffsetType';

/**
 * Request builder class for operations supported on the {@link DeductionArrearRecoveries} entity.
 */
export class DeductionArrearRecoveriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductionArrearRecoveries<T>, T> {
  /**
   * Returns a request builder for querying all `DeductionArrearRecoveries` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionArrearRecoveries` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionArrearRecoveries<T>, T> {
    return new GetAllRequestBuilder<DeductionArrearRecoveries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeductionArrearRecoveries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionArrearRecoveries`.
   */
  create(
    entity: DeductionArrearRecoveries<T>
  ): CreateRequestBuilder<DeductionArrearRecoveries<T>, T> {
    return new CreateRequestBuilder<DeductionArrearRecoveries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeductionArrearRecoveries` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeductionArrearRecoveries.dataAreaId}.
   * @param payStatementNumber Key property. See {@link DeductionArrearRecoveries.payStatementNumber}.
   * @param benefitId Key property. See {@link DeductionArrearRecoveries.benefitId}.
   * @param arrearsChangeType Key property. See {@link DeductionArrearRecoveries.arrearsChangeType}.
   * @param recoveryCreatedBy Key property. See {@link DeductionArrearRecoveries.recoveryCreatedBy}.
   * @param recoveryCreatedDateTime Key property. See {@link DeductionArrearRecoveries.recoveryCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `DeductionArrearRecoveries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    benefitId: DeserializedType<T, 'Edm.String'>,
    arrearsChangeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PrlArrearOffsetType'
    >,
    recoveryCreatedBy: DeserializedType<T, 'Edm.String'>,
    recoveryCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DeductionArrearRecoveries<T>, T> {
    return new GetByKeyRequestBuilder<DeductionArrearRecoveries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PayStatementNumber: payStatementNumber,
        BenefitId: benefitId,
        ArrearsChangeType: arrearsChangeType,
        RecoveryCreatedBy: recoveryCreatedBy,
        RecoveryCreatedDateTime: recoveryCreatedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionArrearRecoveries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionArrearRecoveries`.
   */
  update(
    entity: DeductionArrearRecoveries<T>
  ): UpdateRequestBuilder<DeductionArrearRecoveries<T>, T> {
    return new UpdateRequestBuilder<DeductionArrearRecoveries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionArrearRecoveries`.
   * @param dataAreaId Key property. See {@link DeductionArrearRecoveries.dataAreaId}.
   * @param payStatementNumber Key property. See {@link DeductionArrearRecoveries.payStatementNumber}.
   * @param benefitId Key property. See {@link DeductionArrearRecoveries.benefitId}.
   * @param arrearsChangeType Key property. See {@link DeductionArrearRecoveries.arrearsChangeType}.
   * @param recoveryCreatedBy Key property. See {@link DeductionArrearRecoveries.recoveryCreatedBy}.
   * @param recoveryCreatedDateTime Key property. See {@link DeductionArrearRecoveries.recoveryCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `DeductionArrearRecoveries`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string,
    benefitId: string,
    arrearsChangeType: PrlArrearOffsetType,
    recoveryCreatedBy: string,
    recoveryCreatedDateTime: Moment
  ): DeleteRequestBuilder<DeductionArrearRecoveries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionArrearRecoveries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionArrearRecoveries` by taking the entity as a parameter.
   */
  delete(
    entity: DeductionArrearRecoveries<T>
  ): DeleteRequestBuilder<DeductionArrearRecoveries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string,
    benefitId?: string,
    arrearsChangeType?: PrlArrearOffsetType,
    recoveryCreatedBy?: string,
    recoveryCreatedDateTime?: Moment
  ): DeleteRequestBuilder<DeductionArrearRecoveries<T>, T> {
    return new DeleteRequestBuilder<DeductionArrearRecoveries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeductionArrearRecoveries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!,
            BenefitId: benefitId!,
            ArrearsChangeType: arrearsChangeType!,
            RecoveryCreatedBy: recoveryCreatedBy!,
            RecoveryCreatedDateTime: recoveryCreatedDateTime!
          }
    );
  }
}
