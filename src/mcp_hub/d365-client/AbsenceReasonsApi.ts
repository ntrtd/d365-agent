/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceReasons } from './AbsenceReasons';
import { AbsenceReasonsRequestBuilder } from './AbsenceReasonsRequestBuilder';
import { AbsenceCodesApi } from './AbsenceCodesApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AbsenceReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AbsenceReasons<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AbsenceReasonsApi<DeSerializersT> {
    return new AbsenceReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link relatedAbsenceCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_ABSENCE_CODE: OneToOneLink<
      AbsenceReasons<DeSerializersT>,
      DeSerializersT,
      AbsenceCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      AbsenceReasons<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AbsenceCodesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELATED_ABSENCE_CODE: new OneToOneLink(
        'RelatedAbsenceCode',
        this,
        linkedApis[0]
      ),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AbsenceReasons;

  requestBuilder(): AbsenceReasonsRequestBuilder<DeSerializersT> {
    return new AbsenceReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AbsenceReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AbsenceReasons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AbsenceReasons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AbsenceReasons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AbsenceReasons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AbsenceReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ABSENCE_CODE: OrderableEdmTypeField<
      AbsenceReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      AbsenceReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedAbsenceCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_ABSENCE_CODE: OneToOneLink<
      AbsenceReasons<DeSerializersT>,
      DeSerializersT,
      AbsenceCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      AbsenceReasons<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AbsenceReasons<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link absenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CODE: fieldBuilder.buildEdmTypeField(
          'AbsenceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AbsenceReasons)
      };
    }

    return this._schema;
  }
}
