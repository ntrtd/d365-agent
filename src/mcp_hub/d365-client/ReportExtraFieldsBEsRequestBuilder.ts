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
import { ReportExtraFieldsBEs } from './ReportExtraFieldsBEs';

/**
 * Request builder class for operations supported on the {@link ReportExtraFieldsBEs} entity.
 */
export class ReportExtraFieldsBEsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportExtraFieldsBEs<T>, T> {
  /**
   * Returns a request builder for querying all `ReportExtraFieldsBEs` entities.
   * @returns A request builder for creating requests to retrieve all `ReportExtraFieldsBEs` entities.
   */
  getAll(): GetAllRequestBuilder<ReportExtraFieldsBEs<T>, T> {
    return new GetAllRequestBuilder<ReportExtraFieldsBEs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportExtraFieldsBEs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportExtraFieldsBEs`.
   */
  create(
    entity: ReportExtraFieldsBEs<T>
  ): CreateRequestBuilder<ReportExtraFieldsBEs<T>, T> {
    return new CreateRequestBuilder<ReportExtraFieldsBEs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReportExtraFieldsBEs` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReportExtraFieldsBEs.dataAreaId}.
   * @param taxPeriod Key property. See {@link ReportExtraFieldsBEs.taxPeriod}.
   * @param validFrom Key property. See {@link ReportExtraFieldsBEs.validFrom}.
   * @param validTo Key property. See {@link ReportExtraFieldsBEs.validTo}.
   * @returns A request builder for creating requests to retrieve one `ReportExtraFieldsBEs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPeriod: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ReportExtraFieldsBEs<T>, T> {
    return new GetByKeyRequestBuilder<ReportExtraFieldsBEs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxPeriod: taxPeriod,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReportExtraFieldsBEs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportExtraFieldsBEs`.
   */
  update(
    entity: ReportExtraFieldsBEs<T>
  ): UpdateRequestBuilder<ReportExtraFieldsBEs<T>, T> {
    return new UpdateRequestBuilder<ReportExtraFieldsBEs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportExtraFieldsBEs`.
   * @param dataAreaId Key property. See {@link ReportExtraFieldsBEs.dataAreaId}.
   * @param taxPeriod Key property. See {@link ReportExtraFieldsBEs.taxPeriod}.
   * @param validFrom Key property. See {@link ReportExtraFieldsBEs.validFrom}.
   * @param validTo Key property. See {@link ReportExtraFieldsBEs.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `ReportExtraFieldsBEs`.
   */
  delete(
    dataAreaId: string,
    taxPeriod: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<ReportExtraFieldsBEs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportExtraFieldsBEs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportExtraFieldsBEs` by taking the entity as a parameter.
   */
  delete(
    entity: ReportExtraFieldsBEs<T>
  ): DeleteRequestBuilder<ReportExtraFieldsBEs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPeriod?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<ReportExtraFieldsBEs<T>, T> {
    return new DeleteRequestBuilder<ReportExtraFieldsBEs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReportExtraFieldsBEs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPeriod: taxPeriod!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
