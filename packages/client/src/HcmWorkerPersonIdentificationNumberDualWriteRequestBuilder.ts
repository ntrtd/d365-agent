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
import { HcmWorkerPersonIdentificationNumberDualWrite } from './HcmWorkerPersonIdentificationNumberDualWrite';

/**
 * Request builder class for operations supported on the {@link HcmWorkerPersonIdentificationNumberDualWrite} entity.
 */
export class HcmWorkerPersonIdentificationNumberDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `HcmWorkerPersonIdentificationNumberDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `HcmWorkerPersonIdentificationNumberDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<
    HcmWorkerPersonIdentificationNumberDualWrite<T>,
    T
  > {
    return new GetAllRequestBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HcmWorkerPersonIdentificationNumberDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   */
  create(
    entity: HcmWorkerPersonIdentificationNumberDualWrite<T>
  ): CreateRequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T> {
    return new CreateRequestBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `HcmWorkerPersonIdentificationNumberDualWrite` entity based on its keys.
   * @param workerNumber Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.workerNumber}.
   * @param identificationTypeId Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.identificationTypeId}.
   * @param identificationNumber Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.identificationNumber}.
   * @returns A request builder for creating requests to retrieve one `HcmWorkerPersonIdentificationNumberDualWrite` entity based on its keys.
   */
  getByKey(
    workerNumber: DeserializedType<T, 'Edm.String'>,
    identificationTypeId: DeserializedType<T, 'Edm.String'>,
    identificationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    HcmWorkerPersonIdentificationNumberDualWrite<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<T>,
      T
    >(this.entityApi, {
      WorkerNumber: workerNumber,
      IdentificationTypeId: identificationTypeId,
      IdentificationNumber: identificationNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   */
  update(
    entity: HcmWorkerPersonIdentificationNumberDualWrite<T>
  ): UpdateRequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T> {
    return new UpdateRequestBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   * @param workerNumber Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.workerNumber}.
   * @param identificationTypeId Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.identificationTypeId}.
   * @param identificationNumber Key property. See {@link HcmWorkerPersonIdentificationNumberDualWrite.identificationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   */
  delete(
    workerNumber: string,
    identificationTypeId: string,
    identificationNumber: string
  ): DeleteRequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerPersonIdentificationNumberDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerPersonIdentificationNumberDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: HcmWorkerPersonIdentificationNumberDualWrite<T>
  ): DeleteRequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T>;
  delete(
    workerNumberOrEntity: any,
    identificationTypeId?: string,
    identificationNumber?: string
  ): DeleteRequestBuilder<HcmWorkerPersonIdentificationNumberDualWrite<T>, T> {
    return new DeleteRequestBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<T>,
      T
    >(
      this.entityApi,
      workerNumberOrEntity instanceof
      HcmWorkerPersonIdentificationNumberDualWrite
        ? workerNumberOrEntity
        : {
            WorkerNumber: workerNumberOrEntity!,
            IdentificationTypeId: identificationTypeId!,
            IdentificationNumber: identificationNumber!
          }
    );
  }
}
