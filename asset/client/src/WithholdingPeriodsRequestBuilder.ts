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
import { WithholdingPeriods } from './WithholdingPeriods';

/**
 * Request builder class for operations supported on the {@link WithholdingPeriods} entity.
 */
export class WithholdingPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingPeriods<T>, T> {
    return new GetAllRequestBuilder<WithholdingPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdingPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingPeriods`.
   */
  create(
    entity: WithholdingPeriods<T>
  ): CreateRequestBuilder<WithholdingPeriods<T>, T> {
    return new CreateRequestBuilder<WithholdingPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingPeriods.dataAreaId}.
   * @param taxWithholdPeriod Key property. See {@link WithholdingPeriods.taxWithholdPeriod}.
   * @param taxWithholdFromDate Key property. See {@link WithholdingPeriods.taxWithholdFromDate}.
   * @param taxWithholdToDate Key property. See {@link WithholdingPeriods.taxWithholdToDate}.
   * @returns A request builder for creating requests to retrieve one `WithholdingPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdPeriod: DeserializedType<T, 'Edm.String'>,
    taxWithholdFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    taxWithholdToDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WithholdingPeriods<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingPeriods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdPeriod: taxWithholdPeriod,
        TaxWithholdFromDate: taxWithholdFromDate,
        TaxWithholdToDate: taxWithholdToDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingPeriods`.
   */
  update(
    entity: WithholdingPeriods<T>
  ): UpdateRequestBuilder<WithholdingPeriods<T>, T> {
    return new UpdateRequestBuilder<WithholdingPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingPeriods`.
   * @param dataAreaId Key property. See {@link WithholdingPeriods.dataAreaId}.
   * @param taxWithholdPeriod Key property. See {@link WithholdingPeriods.taxWithholdPeriod}.
   * @param taxWithholdFromDate Key property. See {@link WithholdingPeriods.taxWithholdFromDate}.
   * @param taxWithholdToDate Key property. See {@link WithholdingPeriods.taxWithholdToDate}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingPeriods`.
   */
  delete(
    dataAreaId: string,
    taxWithholdPeriod: string,
    taxWithholdFromDate: Moment,
    taxWithholdToDate: Moment
  ): DeleteRequestBuilder<WithholdingPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingPeriods<T>
  ): DeleteRequestBuilder<WithholdingPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdPeriod?: string,
    taxWithholdFromDate?: Moment,
    taxWithholdToDate?: Moment
  ): DeleteRequestBuilder<WithholdingPeriods<T>, T> {
    return new DeleteRequestBuilder<WithholdingPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdPeriod: taxWithholdPeriod!,
            TaxWithholdFromDate: taxWithholdFromDate!,
            TaxWithholdToDate: taxWithholdToDate!
          }
    );
  }
}
