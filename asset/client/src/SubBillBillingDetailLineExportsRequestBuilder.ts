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
import { SubBillBillingDetailLineExports } from './SubBillBillingDetailLineExports';

/**
 * Request builder class for operations supported on the {@link SubBillBillingDetailLineExports} entity.
 */
export class SubBillBillingDetailLineExportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingDetailLineExports<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingDetailLineExports` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingDetailLineExports` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillBillingDetailLineExports<T>, T> {
    return new GetAllRequestBuilder<SubBillBillingDetailLineExports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillBillingDetailLineExports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingDetailLineExports`.
   */
  create(
    entity: SubBillBillingDetailLineExports<T>
  ): CreateRequestBuilder<SubBillBillingDetailLineExports<T>, T> {
    return new CreateRequestBuilder<SubBillBillingDetailLineExports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingDetailLineExports` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingDetailLineExports.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingDetailLineExports.scheduleNumber}.
   * @param scheduleLineNum Key property. See {@link SubBillBillingDetailLineExports.scheduleLineNum}.
   * @param detailLineNum Key property. See {@link SubBillBillingDetailLineExports.detailLineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingDetailLineExports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    detailLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillBillingDetailLineExports<T>, T> {
    return new GetByKeyRequestBuilder<SubBillBillingDetailLineExports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        ScheduleLineNum: scheduleLineNum,
        DetailLineNum: detailLineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingDetailLineExports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingDetailLineExports`.
   */
  update(
    entity: SubBillBillingDetailLineExports<T>
  ): UpdateRequestBuilder<SubBillBillingDetailLineExports<T>, T> {
    return new UpdateRequestBuilder<SubBillBillingDetailLineExports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingDetailLineExports`.
   * @param dataAreaId Key property. See {@link SubBillBillingDetailLineExports.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingDetailLineExports.scheduleNumber}.
   * @param scheduleLineNum Key property. See {@link SubBillBillingDetailLineExports.scheduleLineNum}.
   * @param detailLineNum Key property. See {@link SubBillBillingDetailLineExports.detailLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingDetailLineExports`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    scheduleLineNum: BigNumber,
    detailLineNum: BigNumber
  ): DeleteRequestBuilder<SubBillBillingDetailLineExports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingDetailLineExports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingDetailLineExports` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingDetailLineExports<T>
  ): DeleteRequestBuilder<SubBillBillingDetailLineExports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    scheduleLineNum?: BigNumber,
    detailLineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillBillingDetailLineExports<T>, T> {
    return new DeleteRequestBuilder<SubBillBillingDetailLineExports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillBillingDetailLineExports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            ScheduleLineNum: scheduleLineNum!,
            DetailLineNum: detailLineNum!
          }
    );
  }
}
