/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { AbsenceCodes } from './AbsenceCodes';

/**
 * Request builder class for operations supported on the {@link AbsenceCodes} entity.
 */
export class AbsenceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AbsenceCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AbsenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AbsenceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AbsenceCodes<T>, T> {
    return new GetAllRequestBuilder<AbsenceCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AbsenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AbsenceCodes`.
   */
  create(entity: AbsenceCodes<T>): CreateRequestBuilder<AbsenceCodes<T>, T> {
    return new CreateRequestBuilder<AbsenceCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AbsenceCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AbsenceCodes.dataAreaId}.
   * @param absenceCode Key property. See {@link AbsenceCodes.absenceCode}.
   * @returns A request builder for creating requests to retrieve one `AbsenceCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    absenceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AbsenceCodes<T>, T> {
    return new GetByKeyRequestBuilder<AbsenceCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AbsenceCode: absenceCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AbsenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AbsenceCodes`.
   */
  update(entity: AbsenceCodes<T>): UpdateRequestBuilder<AbsenceCodes<T>, T> {
    return new UpdateRequestBuilder<AbsenceCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AbsenceCodes`.
   * @param dataAreaId Key property. See {@link AbsenceCodes.dataAreaId}.
   * @param absenceCode Key property. See {@link AbsenceCodes.absenceCode}.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceCodes`.
   */
  delete(
    dataAreaId: string,
    absenceCode: string
  ): DeleteRequestBuilder<AbsenceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AbsenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceCodes` by taking the entity as a parameter.
   */
  delete(entity: AbsenceCodes<T>): DeleteRequestBuilder<AbsenceCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    absenceCode?: string
  ): DeleteRequestBuilder<AbsenceCodes<T>, T> {
    return new DeleteRequestBuilder<AbsenceCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AbsenceCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AbsenceCode: absenceCode!
          }
    );
  }
}
