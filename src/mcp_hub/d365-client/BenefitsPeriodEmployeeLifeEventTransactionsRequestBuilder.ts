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
import { BenefitsPeriodEmployeeLifeEventTransactions } from './BenefitsPeriodEmployeeLifeEventTransactions';

/**
 * Request builder class for operations supported on the {@link BenefitsPeriodEmployeeLifeEventTransactions} entity.
 */
export class BenefitsPeriodEmployeeLifeEventTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPeriodEmployeeLifeEventTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPeriodEmployeeLifeEventTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsPeriodEmployeeLifeEventTransactions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPeriodEmployeeLifeEventTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   */
  create(
    entity: BenefitsPeriodEmployeeLifeEventTransactions<T>
  ): CreateRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T> {
    return new CreateRequestBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPeriodEmployeeLifeEventTransactions` entity based on its keys.
   * @param legalEntityId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lineNum}.
   * @param periodId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.periodId}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lifeEventTypeId}.
   * @param personnelNumber Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPeriodEmployeeLifeEventTransactions` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int32'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, {
      LegalEntityId: legalEntityId,
      LineNum: lineNum,
      PeriodId: periodId,
      LifeEventTypeId: lifeEventTypeId,
      PersonnelNumber: personnelNumber,
      LifeEventDate: lifeEventDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   */
  update(
    entity: BenefitsPeriodEmployeeLifeEventTransactions<T>
  ): UpdateRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   * @param legalEntityId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lineNum}.
   * @param periodId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.periodId}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lifeEventTypeId}.
   * @param personnelNumber Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitsPeriodEmployeeLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   */
  delete(
    legalEntityId: string,
    lineNum: number,
    periodId: string,
    lifeEventTypeId: string,
    personnelNumber: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPeriodEmployeeLifeEventTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPeriodEmployeeLifeEventTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPeriodEmployeeLifeEventTransactions<T>
  ): DeleteRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T>;
  delete(
    legalEntityIdOrEntity: any,
    lineNum?: number,
    periodId?: string,
    lifeEventTypeId?: string,
    personnelNumber?: string,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitsPeriodEmployeeLifeEventTransactions<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<T>,
      T
    >(
      this.entityApi,
      legalEntityIdOrEntity instanceof
      BenefitsPeriodEmployeeLifeEventTransactions
        ? legalEntityIdOrEntity
        : {
            LegalEntityId: legalEntityIdOrEntity!,
            LineNum: lineNum!,
            PeriodId: periodId!,
            LifeEventTypeId: lifeEventTypeId!,
            PersonnelNumber: personnelNumber!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
