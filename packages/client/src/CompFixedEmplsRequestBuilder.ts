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
import { CompFixedEmpls } from './CompFixedEmpls';

/**
 * Request builder class for operations supported on the {@link CompFixedEmpls} entity.
 */
export class CompFixedEmplsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompFixedEmpls<T>, T> {
  /**
   * Returns a request builder for querying all `CompFixedEmpls` entities.
   * @returns A request builder for creating requests to retrieve all `CompFixedEmpls` entities.
   */
  getAll(): GetAllRequestBuilder<CompFixedEmpls<T>, T> {
    return new GetAllRequestBuilder<CompFixedEmpls<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompFixedEmpls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompFixedEmpls`.
   */
  create(
    entity: CompFixedEmpls<T>
  ): CreateRequestBuilder<CompFixedEmpls<T>, T> {
    return new CreateRequestBuilder<CompFixedEmpls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompFixedEmpls` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompFixedEmpls.dataAreaId}.
   * @param positionId Key property. See {@link CompFixedEmpls.positionId}.
   * @param personnelNumber Key property. See {@link CompFixedEmpls.personnelNumber}.
   * @param plan Key property. See {@link CompFixedEmpls.plan}.
   * @param effectiveDate Key property. See {@link CompFixedEmpls.effectiveDate}.
   * @param action Key property. See {@link CompFixedEmpls.action}.
   * @param lineNumber Key property. See {@link CompFixedEmpls.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CompFixedEmpls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    action: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CompFixedEmpls<T>, T> {
    return new GetByKeyRequestBuilder<CompFixedEmpls<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PositionId: positionId,
      PersonnelNumber: personnelNumber,
      Plan: plan,
      EffectiveDate: effectiveDate,
      Action: action,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompFixedEmpls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompFixedEmpls`.
   */
  update(
    entity: CompFixedEmpls<T>
  ): UpdateRequestBuilder<CompFixedEmpls<T>, T> {
    return new UpdateRequestBuilder<CompFixedEmpls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompFixedEmpls`.
   * @param dataAreaId Key property. See {@link CompFixedEmpls.dataAreaId}.
   * @param positionId Key property. See {@link CompFixedEmpls.positionId}.
   * @param personnelNumber Key property. See {@link CompFixedEmpls.personnelNumber}.
   * @param plan Key property. See {@link CompFixedEmpls.plan}.
   * @param effectiveDate Key property. See {@link CompFixedEmpls.effectiveDate}.
   * @param action Key property. See {@link CompFixedEmpls.action}.
   * @param lineNumber Key property. See {@link CompFixedEmpls.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CompFixedEmpls`.
   */
  delete(
    dataAreaId: string,
    positionId: string,
    personnelNumber: string,
    plan: string,
    effectiveDate: Moment,
    action: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CompFixedEmpls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompFixedEmpls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompFixedEmpls` by taking the entity as a parameter.
   */
  delete(entity: CompFixedEmpls<T>): DeleteRequestBuilder<CompFixedEmpls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    positionId?: string,
    personnelNumber?: string,
    plan?: string,
    effectiveDate?: Moment,
    action?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CompFixedEmpls<T>, T> {
    return new DeleteRequestBuilder<CompFixedEmpls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompFixedEmpls
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
