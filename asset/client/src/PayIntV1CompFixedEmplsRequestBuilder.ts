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
import { PayIntV1CompFixedEmpls } from './PayIntV1CompFixedEmpls';

/**
 * Request builder class for operations supported on the {@link PayIntV1CompFixedEmpls} entity.
 */
export class PayIntV1CompFixedEmplsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1CompFixedEmpls` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1CompFixedEmpls` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
    return new GetAllRequestBuilder<PayIntV1CompFixedEmpls<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1CompFixedEmpls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1CompFixedEmpls`.
   */
  create(
    entity: PayIntV1CompFixedEmpls<T>
  ): CreateRequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
    return new CreateRequestBuilder<PayIntV1CompFixedEmpls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1CompFixedEmpls` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1CompFixedEmpls.dataAreaId}.
   * @param positionId Key property. See {@link PayIntV1CompFixedEmpls.positionId}.
   * @param personnelNumber Key property. See {@link PayIntV1CompFixedEmpls.personnelNumber}.
   * @param plan Key property. See {@link PayIntV1CompFixedEmpls.plan}.
   * @param effectiveDate Key property. See {@link PayIntV1CompFixedEmpls.effectiveDate}.
   * @param action Key property. See {@link PayIntV1CompFixedEmpls.action}.
   * @param lineNumber Key property. See {@link PayIntV1CompFixedEmpls.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1CompFixedEmpls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    action: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1CompFixedEmpls<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PositionId: positionId,
        PersonnelNumber: personnelNumber,
        Plan: plan,
        EffectiveDate: effectiveDate,
        Action: action,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1CompFixedEmpls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1CompFixedEmpls`.
   */
  update(
    entity: PayIntV1CompFixedEmpls<T>
  ): UpdateRequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
    return new UpdateRequestBuilder<PayIntV1CompFixedEmpls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompFixedEmpls`.
   * @param dataAreaId Key property. See {@link PayIntV1CompFixedEmpls.dataAreaId}.
   * @param positionId Key property. See {@link PayIntV1CompFixedEmpls.positionId}.
   * @param personnelNumber Key property. See {@link PayIntV1CompFixedEmpls.personnelNumber}.
   * @param plan Key property. See {@link PayIntV1CompFixedEmpls.plan}.
   * @param effectiveDate Key property. See {@link PayIntV1CompFixedEmpls.effectiveDate}.
   * @param action Key property. See {@link PayIntV1CompFixedEmpls.action}.
   * @param lineNumber Key property. See {@link PayIntV1CompFixedEmpls.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompFixedEmpls`.
   */
  delete(
    dataAreaId: string,
    positionId: string,
    personnelNumber: string,
    plan: string,
    effectiveDate: Moment,
    action: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PayIntV1CompFixedEmpls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1CompFixedEmpls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1CompFixedEmpls` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1CompFixedEmpls<T>
  ): DeleteRequestBuilder<PayIntV1CompFixedEmpls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    positionId?: string,
    personnelNumber?: string,
    plan?: string,
    effectiveDate?: Moment,
    action?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PayIntV1CompFixedEmpls<T>, T> {
    return new DeleteRequestBuilder<PayIntV1CompFixedEmpls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1CompFixedEmpls
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PositionId: positionId!,
            PersonnelNumber: personnelNumber!,
            Plan: plan!,
            EffectiveDate: effectiveDate!,
            Action: action!,
            LineNumber: lineNumber!
          }
    );
  }
}
