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
import { BenefitsEmployeeFutureLifeEventTransactions } from './BenefitsEmployeeFutureLifeEventTransactions';

/**
 * Request builder class for operations supported on the {@link BenefitsEmployeeFutureLifeEventTransactions} entity.
 */
export class BenefitsEmployeeFutureLifeEventTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEmployeeFutureLifeEventTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEmployeeFutureLifeEventTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsEmployeeFutureLifeEventTransactions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsEmployeeFutureLifeEventTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   */
  create(
    entity: BenefitsEmployeeFutureLifeEventTransactions<T>
  ): CreateRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T> {
    return new CreateRequestBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEmployeeFutureLifeEventTransactions` entity based on its keys.
   * @param lineNum Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lifeEventTypeId}.
   * @param personnelNumber Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEmployeeFutureLifeEventTransactions` entity based on its keys.
   */
  getByKey(
    lineNum: DeserializedType<T, 'Edm.Int32'>,
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<T>,
      T
    >(this.entityApi, {
      LineNum: lineNum,
      LifeEventTypeId: lifeEventTypeId,
      PersonnelNumber: personnelNumber,
      LifeEventDate: lifeEventDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   */
  update(
    entity: BenefitsEmployeeFutureLifeEventTransactions<T>
  ): UpdateRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   * @param lineNum Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lifeEventTypeId}.
   * @param personnelNumber Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitsEmployeeFutureLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   */
  delete(
    lineNum: number,
    lifeEventTypeId: string,
    personnelNumber: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEmployeeFutureLifeEventTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEmployeeFutureLifeEventTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEmployeeFutureLifeEventTransactions<T>
  ): DeleteRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T>;
  delete(
    lineNumOrEntity: any,
    lifeEventTypeId?: string,
    personnelNumber?: string,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitsEmployeeFutureLifeEventTransactions<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<T>,
      T
    >(
      this.entityApi,
      lineNumOrEntity instanceof BenefitsEmployeeFutureLifeEventTransactions
        ? lineNumOrEntity
        : {
            LineNum: lineNumOrEntity!,
            LifeEventTypeId: lifeEventTypeId!,
            PersonnelNumber: personnelNumber!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
