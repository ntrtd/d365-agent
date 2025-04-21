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
import { ElectronicTimecardActivityRegistrationLines } from './ElectronicTimecardActivityRegistrationLines';

/**
 * Request builder class for operations supported on the {@link ElectronicTimecardActivityRegistrationLines} entity.
 */
export class ElectronicTimecardActivityRegistrationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicTimecardActivityRegistrationLines` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicTimecardActivityRegistrationLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    ElectronicTimecardActivityRegistrationLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ElectronicTimecardActivityRegistrationLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicTimecardActivityRegistrationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicTimecardActivityRegistrationLines`.
   */
  create(
    entity: ElectronicTimecardActivityRegistrationLines<T>
  ): CreateRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T> {
    return new CreateRequestBuilder<
      ElectronicTimecardActivityRegistrationLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ElectronicTimecardActivityRegistrationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicTimecardActivityRegistrationLines.dataAreaId}.
   * @param electronicTimecardActivityRegistrationEntryNumber Key property. See {@link ElectronicTimecardActivityRegistrationLines.electronicTimecardActivityRegistrationEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `ElectronicTimecardActivityRegistrationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    electronicTimecardActivityRegistrationEntryNumber: DeserializedType<
      T,
      'Edm.Int64'
    >
  ): GetByKeyRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T> {
    return new GetByKeyRequestBuilder<
      ElectronicTimecardActivityRegistrationLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ElectronicTimecardActivityRegistrationEntryNumber:
        electronicTimecardActivityRegistrationEntryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicTimecardActivityRegistrationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicTimecardActivityRegistrationLines`.
   */
  update(
    entity: ElectronicTimecardActivityRegistrationLines<T>
  ): UpdateRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T> {
    return new UpdateRequestBuilder<
      ElectronicTimecardActivityRegistrationLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicTimecardActivityRegistrationLines`.
   * @param dataAreaId Key property. See {@link ElectronicTimecardActivityRegistrationLines.dataAreaId}.
   * @param electronicTimecardActivityRegistrationEntryNumber Key property. See {@link ElectronicTimecardActivityRegistrationLines.electronicTimecardActivityRegistrationEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTimecardActivityRegistrationLines`.
   */
  delete(
    dataAreaId: string,
    electronicTimecardActivityRegistrationEntryNumber: BigNumber
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicTimecardActivityRegistrationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTimecardActivityRegistrationLines` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicTimecardActivityRegistrationLines<T>
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    electronicTimecardActivityRegistrationEntryNumber?: BigNumber
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationLines<T>, T> {
    return new DeleteRequestBuilder<
      ElectronicTimecardActivityRegistrationLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicTimecardActivityRegistrationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ElectronicTimecardActivityRegistrationEntryNumber:
              electronicTimecardActivityRegistrationEntryNumber!
          }
    );
  }
}
