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
import { TimesheetLineTransTaxInformations } from './TimesheetLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link TimesheetLineTransTaxInformations} entity.
 */
export class TimesheetLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `TimesheetLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `TimesheetLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<TimesheetLineTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TimesheetLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimesheetLineTransTaxInformations`.
   */
  create(
    entity: TimesheetLineTransTaxInformations<T>
  ): CreateRequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<TimesheetLineTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimesheetLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimesheetLineTransTaxInformations.dataAreaId}.
   * @param timesheetNbr Key property. See {@link TimesheetLineTransTaxInformations.timesheetNbr}.
   * @param lineNum Key property. See {@link TimesheetLineTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests to retrieve one `TimesheetLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timesheetNbr: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<TimesheetLineTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TimesheetNbr: timesheetNbr,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TimesheetLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimesheetLineTransTaxInformations`.
   */
  update(
    entity: TimesheetLineTransTaxInformations<T>
  ): UpdateRequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<TimesheetLineTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimesheetLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link TimesheetLineTransTaxInformations.dataAreaId}.
   * @param timesheetNbr Key property. See {@link TimesheetLineTransTaxInformations.timesheetNbr}.
   * @param lineNum Key property. See {@link TimesheetLineTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `TimesheetLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    timesheetNbr: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<TimesheetLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimesheetLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimesheetLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: TimesheetLineTransTaxInformations<T>
  ): DeleteRequestBuilder<TimesheetLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timesheetNbr?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<TimesheetLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<TimesheetLineTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimesheetLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimesheetNbr: timesheetNbr!,
            LineNum: lineNum!
          }
    );
  }
}
