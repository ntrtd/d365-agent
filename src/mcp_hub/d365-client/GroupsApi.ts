/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Groups } from './Groups';
import { GroupsRequestBuilder } from './GroupsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RDeferralsInitRetirementDate } from './RDeferralsInitRetirementDate';
import { RDeferralsInitWriteStartDate } from './RDeferralsInitWriteStartDate';
import { RDeferralsVatRefundingMethod } from './RDeferralsVatRefundingMethod';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class GroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Groups<DeSerializersT>, DeSerializersT>
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
  ): GroupsApi<DeSerializersT> {
    return new GroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Groups<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Groups;

  requestBuilder(): GroupsRequestBuilder<DeSerializersT> {
    return new GroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Groups<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Groups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Groups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Groups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Groups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRALS_GROUP: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITING_OFF_METHOD: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITING_OFF_TIME: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISPOSAL_DATE: EnumField<
      Groups<DeSerializers>,
      DeSerializersT,
      RDeferralsInitRetirementDate,
      true,
      true
    >;
    BEGINNING_DATE_OF_WRITING_OFF: EnumField<
      Groups<DeSerializers>,
      DeSerializersT,
      RDeferralsInitWriteStartDate,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_OFFSET_METHOD_FOR_DEFERRALS: EnumField<
      Groups<DeSerializers>,
      DeSerializersT,
      RDeferralsVatRefundingMethod,
      true,
      true
    >;
    MODEL_NUMBER: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Groups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Groups<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Groups<DeSerializers>>;
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
         * Static representation of the {@link deferralsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRALS_GROUP: fieldBuilder.buildEdmTypeField(
          'DeferralsGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link writingOffMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_METHOD: fieldBuilder.buildEdmTypeField(
          'WritingOffMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link writingOffTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_TIME: fieldBuilder.buildEdmTypeField(
          'WritingOffTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link disposalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_DATE: fieldBuilder.buildEnumField(
          'DisposalDate',
          RDeferralsInitRetirementDate,
          true
        ),
        /**
         * Static representation of the {@link beginningDateOfWritingOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_DATE_OF_WRITING_OFF: fieldBuilder.buildEnumField(
          'BeginningDateOfWritingOff',
          RDeferralsInitWriteStartDate,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link vatOffsetMethodForDeferrals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OFFSET_METHOD_FOR_DEFERRALS: fieldBuilder.buildEnumField(
          'VATOffsetMethodForDeferrals',
          RDeferralsVatRefundingMethod,
          true
        ),
        /**
         * Static representation of the {@link modelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ModelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Groups)
      };
    }

    return this._schema;
  }
}
