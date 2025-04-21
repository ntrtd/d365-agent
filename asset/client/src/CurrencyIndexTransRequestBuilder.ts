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
import { CurrencyIndexTrans } from './CurrencyIndexTrans';

/**
 * Request builder class for operations supported on the {@link CurrencyIndexTrans} entity.
 */
export class CurrencyIndexTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyIndexTrans<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyIndexTrans` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyIndexTrans` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyIndexTrans<T>, T> {
    return new GetAllRequestBuilder<CurrencyIndexTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyIndexTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyIndexTrans`.
   */
  create(
    entity: CurrencyIndexTrans<T>
  ): CreateRequestBuilder<CurrencyIndexTrans<T>, T> {
    return new CreateRequestBuilder<CurrencyIndexTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyIndexTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link CurrencyIndexTrans.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyIndexTrans.ruleGroup}.
   * @param inflationIndex Key property. See {@link CurrencyIndexTrans.inflationIndex}.
   * @param fromDate Key property. See {@link CurrencyIndexTrans.fromDate}.
   * @returns A request builder for creating requests to retrieve one `CurrencyIndexTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleGroup: DeserializedType<T, 'Edm.String'>,
    inflationIndex: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CurrencyIndexTrans<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyIndexTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleGroup: ruleGroup,
        InflationIndex: inflationIndex,
        FromDate: fromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyIndexTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyIndexTrans`.
   */
  update(
    entity: CurrencyIndexTrans<T>
  ): UpdateRequestBuilder<CurrencyIndexTrans<T>, T> {
    return new UpdateRequestBuilder<CurrencyIndexTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyIndexTrans`.
   * @param dataAreaId Key property. See {@link CurrencyIndexTrans.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyIndexTrans.ruleGroup}.
   * @param inflationIndex Key property. See {@link CurrencyIndexTrans.inflationIndex}.
   * @param fromDate Key property. See {@link CurrencyIndexTrans.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIndexTrans`.
   */
  delete(
    dataAreaId: string,
    ruleGroup: string,
    inflationIndex: string,
    fromDate: Moment
  ): DeleteRequestBuilder<CurrencyIndexTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyIndexTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIndexTrans` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyIndexTrans<T>
  ): DeleteRequestBuilder<CurrencyIndexTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleGroup?: string,
    inflationIndex?: string,
    fromDate?: Moment
  ): DeleteRequestBuilder<CurrencyIndexTrans<T>, T> {
    return new DeleteRequestBuilder<CurrencyIndexTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CurrencyIndexTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleGroup: ruleGroup!,
            InflationIndex: inflationIndex!,
            FromDate: fromDate!
          }
    );
  }
}
